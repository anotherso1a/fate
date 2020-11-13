// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const path = require('path')
const resolve = p => path.resolve(__dirname, p)

const GUA = require(resolve('./gua'))

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const guas = event.guas.reverse()
  let data = guas.map((k,i) => {
    return GUA[k].pos[i]
  })
  return {
    data
  }
}