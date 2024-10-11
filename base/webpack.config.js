var HtmlwebpackPlugin = require("html-webpack-plugin")
var CleanWebpackPlugin = require("clean-webpack-plugin")
var OpenBrowserPlugin = require("open-browser-webpack-plugin")
var UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩混淆代码

var path = require("path")

var PAGETITLE = 'webpack-base-demo';

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "./main.js"),
  },
  output: {
    filename: "[name][hash:8].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new UglifyJsPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HtmlwebpackPlugin({
      // 自动生成html
      title: PAGETITLE, // 设置生成的HTML文件的标题
      filename: "index.html", // 默认为 index.html
    }),
    new OpenBrowserPlugin({
      // 自动打开浏览器
      url: "http://localhost:8080",
    }),
  ],
}
