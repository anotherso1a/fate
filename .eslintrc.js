module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true
  },
  globals: {
    wx: false,
    Behavior:true,
    getApp: true,
    getCurrentPages: true,
    App: true,
    Page: true,
    Component: true,
    __wxConfig: true,
    __mpx_mode__: true,
    swan: false, // for Baidu App
    system: false, // for QuickApp
    my: false, // for Alipay App
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.mpx'],  // consider .html and .mpx files as HTML
  },
  rules:{
    // styles
    'indent': ["error", 2, { "SwitchCase": 1 }],
    'semi': ['error', 'never'],
    'comma-spacing': ['error', { "before": false, "after": true }],
    'space-infix-ops': ['error', { 'int32Hint': true }],
    'space-before-blocks': ['error', { "functions": "never", "keywords": "always", "classes": "never" }],
    'arrow-spacing': 'error',
    'comma-dangle': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-multi-spaces': 'error',
    // code rules
    'constructor-super': 'off',
    'no-prototype-builtins': 'off', // 禁用Object.prototype中的方法
    'no-unused-vars': 'off', // 变量定义后未使用
    'no-throw-literal': 'off',
    'no-empty': ['error', { "allowEmptyCatch": true }], // 空的代码块
  }
}