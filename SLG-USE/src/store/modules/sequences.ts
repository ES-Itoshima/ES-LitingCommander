import { ActionTree, Module, MutationTree } from 'vuex'
import { RootState } from '..'
import { Sequence } from '../../app/sequences'

/** Vuex storeのSequencesモジュールのステート
 *
 * - `store.state.sequences` でアクセスできる
 */
export interface SequencesState {
  /** プロジェクトに含まれるシーケンスのリスト */
  sequences: Sequence[]

  /** 各シーケンスの再生開始時刻のリスト（UNIXTime sec） */
  startTimes: number[]

  /** 最後に同期タップが実行された時刻（UNIXTime sec） */
  lastTapTime: number

  /** 曲のテンポに同期させる時間周期（UNIXTime sec） */
  cycle: number
}

const state: SequencesState = {
  sequences: [],
  startTimes: [],
  lastTapTime: 0,
  cycle: 0.5,
}

const mutations: MutationTree<SequencesState> = {
  /** プロジェクトに含まれるシーケンスのリストを設定する */
  setSequences(state, sequences) {
    state.sequences = sequences || []
  },

  /** 各シーケンスの再生開始時刻のリストを設定する*/
  setStartTimes(state, startTimes) {
    state.startTimes = startTimes || []
  },

  /** 曲のテンポに同期させるタップを実行する */
  tap(state) {
    const now = Date.now() / 1000
    // 2秒以内に2回タップされた場合は、その間の時間差を周期とする
    if (state.lastTapTime > now - 2) {
      state.cycle = now - state.lastTapTime
    }
    state.lastTapTime = now
  },
}

const actions: ActionTree<SequencesState, RootState> = {
  /** プロジェクトに含まれるシーケンスのリストを設定する */
  setStartTimes(store, startTimes) {
    store.commit('setStartTimes', startTimes)
  },

  /** 曲のテンポに同期させるタップを実行する */
  tap(store) {
    store.commit('tap')
  },
}

const sequencesModule: Module<SequencesState, RootState> = {
  state,
  mutations,
  actions,
}

export default sequencesModule
