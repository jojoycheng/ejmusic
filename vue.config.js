const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/ejmusic/' // 資料夾路徑，同時是儲存庫名稱
  : '/'
})
