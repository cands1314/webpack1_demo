var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩混淆代码

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
