// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const path = require('path')
const resolve = p => path.resolve(__dirname, p)

const processOne = require(resolve('./src/processOne'))

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return {
    oneWords: await processOne(), // 获取每日语录
  }
}