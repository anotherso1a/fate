// mpx的loader配置在这里传入
// 配置项文档：https://www.mpxjs.cn/api/compile.html#mpxwebpackplugin-loader
const path = require('path')
module.exports = {
  loaders: {
    stylus: ['css-loader', 'stylus-loader',
      {
        loader: 'style-resources-loader',
        options: {
          patterns: [
            path.resolve(__dirname, '../src/common/stylus/*.styl')
          ]
        }
      }
    ]
  }
}
