import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import dmx, { DmxState } from './modules/dmx'
import presets, { PresetsState } from './modules/presets'
import sequences, { SequencesState } from './modules/sequences'

export type RootState = {
  dmx: DmxState
  presets: PresetsState
  sequences: SequencesState
}

Vue.use(Vuex)

const options: StoreOptions<RootState> = {
  modules: { dmx, presets, sequences },
  strict: process.env.NODE_ENV !== 'production',
}
const store = new Vuex.Store<RootState>(options)

export default store
