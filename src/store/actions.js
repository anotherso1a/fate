// import { processOneWebData } from '@/common/utils'
// import mpx from '@mpxjs/core'
export default {
  getOneWebData ({ commit }){
    wx.cloud.callFunction({
      // 云函数名称
      name: 'crawler'
    }).then(res => {
      commit('setDailyWords', res.result.oneWords)
    }).catch(console.error)
  },
  calculateYI({commit}, pyload){
    wx.cloud.callFunction({
      // 云函数名称
      name: 'yi',
      data: {
        guas: pyload
      }
    }).then(res => {
      commit('setYI', res.result.data)
    }).catch(console.error)
  }
}
