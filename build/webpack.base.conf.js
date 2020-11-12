const path = require('path')
module.exports = {
  performance: {
    hints: false
  },
  mode: 'none',
  resolve: {
    alias: {
      '@': path.resolve('src'),
      'utils': path.resolve('src/common/utils')
    },
    extensions: ['.mpx', '.js', '.wxml', '.vue', '.ts'],
    modules: ['node_modules']
  }
}
