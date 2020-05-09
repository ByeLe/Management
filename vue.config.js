module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 设置路径
  /** 修改webpack默认参数 */
  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-prod.js')
      config.set('externals', { //  加载外部依赖，不用将这些组件打入main.js中，以减少打包体积，
        vue: 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ElementUI',
        vuex: 'Vuex'
      })
    })
  }
}
