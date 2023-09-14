// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { name } = require('./package.json')

module.exports = {
  devServer: {
    port: 5002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
}
