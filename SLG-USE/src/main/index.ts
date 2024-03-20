'use strict'

import { createServer } from 'http'
import { resolve } from 'path'
import express from 'express'
import { presets, renderPreset } from '../app/index'
import sequences, { render as renderSequences } from '../app/sequences'
import { DmxFrame } from '@nandenjin/alien-core'
import { Server as SocketServer, Socket } from 'socket.io'
import consola from 'consola'

import store from '../store'
import { MutationPayload } from 'vuex'

// WebUIを配信するポート番号
const PORT = 8080

/** expressのHTTP router */
const app = express()

// WebUIのビルド済みディレクトリを配信する
app.use(express.static(resolve(__dirname, '../../dist/renderer/')))

/** HTTPサーバ */
const server = createServer(app)

/** Socket.ioサーバ */
const io = new SocketServer(server)

const sortedPresets = presets.sort((a, b) => a.id.localeCompare(b.id))

store.commit('setPresets', sortedPresets)
store.commit('setSequences', sequences)

const connections: Socket[] = []

// 新規クライアントの接続時処理
io.on('connection', socket => {
  connections.push(socket)
  consola.log(`Client connected: ${socket.id}`)

  // ステートの同期
  socket.emit('commit', { type: 'setPresets', payload: sortedPresets })
  socket.emit('commit', { type: 'setSequences', payload: sequences })
  socket.emit('commit', {
    type: 'setStartTimes',
    payload: store.state.sequences.startTimes,
  })

  // コミットが送信されたら同期する
  // To be implemented: 複数クライアントの操作時にも相互に同期する
  socket.on('commit', ({ type, payload }: MutationPayload) => {
    store.commit(type, payload)
  })

  // 接続解除時の処理
  socket.on('disconnect', () => {
    connections.splice(connections.indexOf(socket), 1)
    consola.log(`Client has gone: ${socket.id}`)
  })
})

/** ArtNetの出力インターフェース */
const artnet = require('artnet')({
  // 送信先ホスト
  // 現状は設定方法を設けていないため固定値
  host: '255.255.255.255',

  // 差分フレームではなく、毎回全フレームを送出する
  // （オリジナルの受信デバイスの実装都合で、こうでないとうまくいかないことがあった）
  sendAll: true,
})

setInterval(() => {
  /** baseプリセット（各灯体の初期状態）のレンダリング結果 */
  const base = new DmxFrame()

  /** 再生中のシーケンスのレンダリング結果 */
  const renderedSequences = new DmxFrame()

  // シーケンスのレンダリングを実行
  const { startTimes, cycle } = store.state.sequences
  renderSequences(renderedSequences, sequences, startTimes, cycle, base)

  /**  */
  const renderedPreset = renderPreset(
    store.state.presets.overridePresets || [],
    Date.now() / 1000 / store.state.sequences.cycle
  )

  /** 再生中のシーケンスが出力したチャンネルの値リスト */
  const sequencesFrame = renderedSequences.data[0] || []

  /** GUIから手動で点灯されたプリセットの値リスト */
  const presetsFrame = renderedPreset.data[0] || []

  /** GUIから手動で設定されたチャンネルの値リスト */
  const overrideFrame = store.state.dmx.overrideFrame.data[0] || []

  /** 送出するDMXの値配列 */
  const dist = new Array(512).fill(0)

  // 各DMXチャンネルについて
  for (let i = 0; i < 512; i++) {
    // 再生中のシーケンス、プリセット、手動設定の順に適用し、値を上書きする
    dist[i] = sequencesFrame[i] !== undefined ? sequencesFrame[i] : dist[i]
    dist[i] = presetsFrame[i] !== undefined ? presetsFrame[i] : dist[i]
    dist[i] = overrideFrame[i] !== undefined ? overrideFrame[i] : dist[i]
  }

  // クライアントに現在のフレームを送信
  io.emit('commit', { type: 'setFrame', payload: { data: [dist] } })

  // mainプロセスの持つstoreのフレームを更新
  store.commit('setFrame', [dist])

  // ArtNetへ送出
  artnet.set(dist)
}, 50)

// Socket.ioとExpressを載せたHTTPサーバを起動
server.listen(PORT, () =>
  consola.info('Server ready at http://localhost:' + PORT)
)

export default null
