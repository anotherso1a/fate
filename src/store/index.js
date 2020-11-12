import state from './state'
import actions from './actions'
import mutations from './mutations'
import { createStore } from '@mpxjs/core'

export default createStore({
  state,
  mutations,
  actions
})
