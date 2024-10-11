var HtmlwebpackPlugin = require("html-webpack-plugin")
var path = require("path")
var CleanWebpackPlugin = require("clean-webpack-plugin")
const config = require("./public/config")

var PAGETITLE = "asdsdasda"

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "./main.js"),
  },
  output: {
    filename: "[name].[hash:8].js", // 文件需要变化
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new HtmlwebpackPlugin({
      // 自动生成html
      filename: "index.html", // 默认为 index.html
      template: path.resolve(__dirname, "../public/index.html"), // 指定模版文件路径
      // chunks: ['main', 'vendor'], // 指定注入模块
      // inject: 'body', // JS文件引用方式
      minify: {
        collapseWhitespace: false, // 是否折叠空白
        removeAttributeQuotes: false, // 是否删除属性的双引号
        removeComments: true,
      }, // 压缩方式
      hash: false, // 是否加hash
      // favicon: 'src/favicon.ico',
      meta: {
          viewport: 'width=device-width, initial-scale=1'
      } // 添加额外的 meta
    }),
    new CleanWebpackPlugin(["dist"]),
  ],
}
