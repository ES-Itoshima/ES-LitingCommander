import { DmxFrame } from '@nandenjin/alien-core'
import consola from 'consola'

// import { base } from './base'
import { colors } from './colors'
import { ground } from './ground'
// import { nagare } from './nagare'
// import { ss } from './ss'
// // import { fs } from './fs'
import { cl } from './cl'
// import { beams } from './beams'
// import { backpar } from './backpar'
// import { par } from './par'
// import { spot } from './spot'
// import { floorpar } from './floorpar'
// import { mh } from './mh'
import { led } from './led'
// import { bl } from './bl'

/**
 * 時刻及び任意のパラメータから、各チャンネルの値を生成する
 *
 * - 関数は、時刻に応じて受け取ったDmxFrameを変更し、出力値を作成する
 * - untouchedな値は「出力なし」と扱われる
 *   -  `DmxFrame.merge()` の仕様に即し、 `undefined` が格納されたチャンネルは、マージ先を変更しない
 */
type RenderFunction = (
  /** 出力先のDmxFrame */
  frame: DmxFrame,

  /** 時刻（秒） */
  time?: number,

  /** その他任意のパラメータを引数として渡せる */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any
) => void

/**
 * ある点灯状態を表すプリセット。記憶卓でいうところのシーン
 * - 時刻からDMX出力を生成する関数を持つ
 *   - カスタマイズのため、任意のパラメータを持つこともできる
 * - 他のシーンを継承することができる
 */
export interface Preset {
  id: string

  /** 継承する他のプリセットのID。ここで記述したプリセットを再生した上で、renderの出力を加算することができる */
  extends?: string[]

  /** 時刻及び任意のパラメータから、プリセットの出力を生成する関数 */
  render?: RenderFunction
}

/** プロジェクトに存在するプリセットのリスト */
export const presets: Preset[] = [
  // ...base,
  // ...bl,
  ...colors,
  ...ground,
  // ...nagare,
  // ...ss,
  // ...fs,
  ...cl,
  // ...beams,
  // ...backpar,
  // ...par,
  // ...spot,
  // ...floorpar,
  // ...mh,
  ...led,
]

/** presets配列からプリセットをIDで取得する */
export function get(id: string) {
  for (const preset of presets) {
    if (preset.id === id) return preset
  }
}

/**
 * presetのIDと時刻の値から、その時点のDMX出力を生成する
 * @param ids プリセットのID（プロジェクトのpresetsに登録されているもの）
 * @param time 時刻（秒）
 * @param args presetが持つ任意のパラメータ
 * @returns DMX出力
 */
export function render(
  ids: string | string[],
  time = 0,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
): DmxFrame {
  if (!(ids instanceof Array)) ids = [ids]

  const d = new DmxFrame()
  for (const id of ids) {
    const preset = get(id)
    if (!preset) {
      consola.warn(`Unknown preset: ${id}`)
      continue
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    d.merge(renderPresetObject(preset, time, ...args))
  }

  return d
}

/**
 * プリセットと時刻、プリセット固有の任意のパラメータからDMX出力を生成する
 *
 * - `renderPresetObject()` は、 `preset.extends` を適用した最終的な結果を返す
 *   - `preset.render()` は、presetで独自に定義された結果しか返さない
 *
 * @param preset 対象のプリセット
 * @param time 時刻（秒）
 * @param args presetが持つ任意の独自パラメータ
 * @returns DMX出力
 */
export function renderPresetObject(
  preset: Preset,
  time = 0,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
): DmxFrame {
  const d = new DmxFrame()
  if (preset.extends) d.merge(render(preset.extends, time))
  if (preset.render) preset.render(d, time, ...args)
  return d
}

export function getRenderer(id: string): RenderFunction {
  const preset = get(id)
  if (preset)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (d: DmxFrame, time = 0, ...args: any[]) => {
      if (preset.extends) d.merge(render(preset.extends, time))
      if (preset.render) preset.render(d, time, ...args)
    }
  // throw new Error(`Unknown preset: ${id}`)
  consola.warn(`Unknown preset: ${id}`)

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => { }
}
