import { ActionTree, Module, MutationTree } from 'vuex'
import { RootState } from '..'
import { Preset } from '../../app/presets'

/** Vuex storeのPresetsモジュールのステート
 *
 * - `store.state.presets` でアクセスできる
 */
export interface PresetsState {
  /** プロジェクトに含まれるプリセットのリスト */
  presets: Preset[]

  /** GUIから上書きで再生されているプリセットのIDリスト */
  overridePresets: string[]
}

const state: PresetsState = {
  presets: [],
  overridePresets: [],
}

const mutations: MutationTree<PresetsState> = {
  /** プロジェクトに含まれるプリセットを設定する */
  setPresets(state, presets) {
    state.presets = presets
  },

  /** GUIから上書き再生するプリセットを設定する */
  updateOverridePresets(state, overridePresets) {
    state.overridePresets = overridePresets
  },
}

const actions: ActionTree<PresetsState, RootState> = {
  /** GUIから上書き再生するプリセットを設定する */
  updateOverridePresets(store, overridePresets) {
    store.commit('updateOverridePresets', overridePresets)
  },

  /** GUIから上書き再生するプリセットをクリアする */
  clearOverrides(store) {
    store.commit('updateOverridePresets', [])
  },
}

const presetsModule: Module<PresetsState, RootState> = {
  state,
  mutations,
  actions,
}

export default presetsModule
