const path = require("path")

module.exports = {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },

  watch: true,

  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    watchOptions:{
      poll: true,
      ignored: "/node_modules/"
    },
    liveReload: true,
  }
}
