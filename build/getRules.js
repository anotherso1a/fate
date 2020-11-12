let { mpxLoaderConf } = require('../config/index')
const MpxWebpackPlugin = require('@mpxjs/webpack-plugin')
const { resolve, resolveSrc } = require('./utils')

const baseRules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('test'), resolve('node_modules/@mpxjs')]
  },
  {
    test: /\.json$/,
    resourceQuery: /__component/,
    type: 'javascript/auto'
  },
  {
    test: /\.(wxs|qs|sjs|filter\.js)$/,
    loader: MpxWebpackPlugin.wxsPreLoader(),
    enforce: 'pre'
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: MpxWebpackPlugin.urlLoader({
      name: 'img/[name][hash].[ext]'
    })
  }
]

const eslintRule = {
  test: /\.(js|ts|mpx)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src')]
}

const tsRule = {
  test: /\.ts$/,
  use: [
    'babel-loader',
    'ts-loader'
  ]
}

module.exports = function getRules (options) {
  const { mode, tsSupport, needEslint, plugin, subDir } = options

  let rules = baseRules.slice()

  if (tsSupport) {
    rules.push(tsRule)
  }

  if (needEslint) {
    rules.push(eslintRule)
  }

  if (plugin) {
    rules.push({
      resource: resolveSrc('plugin.json', subDir),
      use: MpxWebpackPlugin.pluginLoader()
    })
  }

  if (typeof mpxLoaderConf === 'function') {
    mpxLoaderConf = mpxLoaderConf(options)
  }

  if (mode === 'web') {
    rules = rules.concat([
      {
        test: /\.mpx$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              transformToRequire: {
                'mpx-image': 'src',
                'mpx-audio': 'src',
                'mpx-video': 'src'
              }
            }
          },
          MpxWebpackPlugin.loader(mpxLoaderConf)
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ])
  } else {
    rules = rules.concat([
      {
        test: /\.mpx$/,
        use: MpxWebpackPlugin.loader(mpxLoaderConf)
      }
    ])
  }

  return rules
}
