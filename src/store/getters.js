export default {
  YITexts(state){
    return state.YI.map(e => `${e.text} ${e.xiang}`)
  },
  YITrans(state){
    return state.YI.map(e => `${e.trans} ${e.xiangTrans}`.replace(/【白话】(([一二三四五六七八九].|.[一二三四五六七八九])，)?/g, ''))
  }
}