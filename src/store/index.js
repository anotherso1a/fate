import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { createStore } from '@mpxjs/core'

export default createStore({
  state,
  getters,
  mutations,
  actions
})
