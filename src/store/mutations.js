import mpx from '@mpxjs/core'
export default {
  setDailyWords (state, payload){
    mpx.set(state, 'words', payload)
  },
  setYI(state, payload){
    mpx.set(state, 'YI', payload)
  }
}
