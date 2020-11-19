export default {
  YITexts(state){
    return state.YI.map(e => `${e.text} ${e.xiang}`)
  },
  YITrans(state){
    return state.YI.map(e => `${e.trans} ${e.xiangTrans}`)
  }
}