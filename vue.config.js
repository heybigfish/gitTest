/*
* Copyright (C) 2011-2019 ShenZhen iBOXCHAIN Information Technology Co.,Ltd.
* All right reserved.
*
* This software is the confidential and proprietary
* information of iBOXCHAIN Company of China.
* ("Confidential Information"). You shall not disclose
* such Confidential Information and shall use it only
* in accordance with the terms of the contract agreement
* you entered into with iBOXCHAIN inc.
*
*/

module.exports = {
  // 从 Vue CLI 3.3 起已弃用baseUrl,更改为publicPath
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  // 打包的默认文件夹名称
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码,设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.2.12:8093/mmp/api',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugin('copy').tap(([pathConfigs]) => {
      const to = pathConfigs[0].to
      // so the original `/public` folder keeps priority
      pathConfigs[0].force = true
      // add other locations.
      pathConfigs.unshift({
        from: 'static',
        to: `${to}/static`
      }, {
        from: './src/assets/style/wechatLogin.css',
        to: `${to}/assets/css`
      })
      return [pathConfigs]
    })
  }
}
