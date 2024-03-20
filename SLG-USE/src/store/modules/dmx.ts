import { DmxFrame } from '@nandenjin/alien-core'
import Vue from 'vue'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '..'

/** Vuex storeのDMXモジュールのステート
 *
 * - `store.state.dmx` でアクセスできる
 */
export interface DmxState {
  /** 現在出力されている値を入れたフレーム */
  currentFrame: DmxFrame

  /** GUIから上書きしている値を入れたフレーム */
  overrideFrame: DmxFrame
}

const state: DmxState = {
  currentFrame: new DmxFrame(),
  overrideFrame: new DmxFrame(),
}

const mutations: MutationTree<DmxState> = {
  /** 現在出力されている値を設定する */
  setFrame(state, frame) {
    state.currentFrame = frame
  },

  /** GUIからの上書き値を設定する */
  overrideFrame(state, [ch, value]) {
    // ユニバース1が未定義な場合は初期化する
    if (!state.overrideFrame.data[0]) {
      Vue.set(state.overrideFrame.data, 0, [])
    }

    // note: Vue.setを使わずDmxFrameのメソッドを使用すると、Vueが追従できずUIが更新されない
    Vue.set(state.overrideFrame.data[0], ch - 1, value)
  },

  /** GUIからの上書き値をクリアする */
  clearOverrides(state) {
    Vue.set(state.overrideFrame.data, 0, [])
  },
}

const getters: GetterTree<DmxState, RootState> = {
  values(state) {
    const override = (state.overrideFrame.data || [])[0] || []
    return (state.currentFrame.data[0] || []).map((d, i) =>
      override[i] !== undefined ? override[i] : d
    )
  },
}

const actions: ActionTree<DmxState, RootState> = {
  /** GUIからの上書き値を設定する */
  overrideFrame(store, opts) {
    store.commit('overrideFrame', opts)
  },

  /** GUIからの上書き値をクリアする */
  clearOverrides(store) {
    store.commit('clearOverrides')
  },
}

const dmxModule: Module<DmxState, RootState> = {
  state,
  mutations,
  getters,
  actions,
}

export default dmxModule
