// import { processOneWebData } from '@/common/utils'
// import mpx from '@mpxjs/core'
export default {
  getOneWebData ({ commit }) {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'crawler'
    }).then(res => {
      commit('setDailyWords', res.result.oneWords)
    }).catch(console.error)
  }
}
