const path = require("path");

module.exports = {
  publicPath: '/',
  outputDir: path.resolve(__dirname, './docs'),
  configureWebpack: {
    resolve: {
      alias: {
        "mdi": path.resolve(__dirname, 'node_modules/vue-material-design-icons')
      }
    }
  }
}
