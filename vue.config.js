// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // transpileDependencies: true,
  // publicPath: './',
  // devServer: {
  //   proxy: {
  //     '/token': {
  //       target: 'https://account.kkbox.com/oauth2/token',
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // }
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ejmusic/' // 資料夾路徑，同時是儲存庫名稱
    : '/'
}
