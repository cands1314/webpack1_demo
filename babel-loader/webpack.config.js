var HtmlwebpackPlugin = require("html-webpack-plugin")
var CleanWebpackPlugin = require("clean-webpack-plugin")
var OpenBrowserPlugin = require("open-browser-webpack-plugin")
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var path = require("path")

var PAGETITLE = "webpack-base-demo"

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "./main.jsx"),
  },
  output: {
    filename: "[name][hash:8].js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 匹配需要转换的文件类型
        exclude: /node_modules/, // 排除文件
        use: ['babel-loader']
      },
      
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new UglifyJsPlugin(),
    new HtmlwebpackPlugin({
      // 自动生成html
      title: PAGETITLE, // 设置生成的HTML文件的标题
      filename: "index.html", // 默认为 index.html
      template: path.resolve(__dirname, "../public/index.html"), // 指定模版文件路径
    }),
    new OpenBrowserPlugin({
      // 自动打开浏览器
      url: "http://localhost:8080",
    }),
  ],
}
