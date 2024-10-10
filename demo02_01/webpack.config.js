var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    bundle1: path.resolve(__dirname, './main1.js'),
    bundle2: path.resolve(__dirname, './main2.js')
  },
  output: {
    filename: '[name].[hash:8].js', // 文件需要变化
    path: path.resolve(__dirname, './dist')

  },
  plugins: [
    new HtmlwebpackPlugin({ // 自动生成html
      title: 'multi-enrty-demo', // 设置生成的HTML文件的标题
      filename: 'index.html' // 默认为 index.html
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
