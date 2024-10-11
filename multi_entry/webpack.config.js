var HtmlwebpackPlugin = require("html-webpack-plugin")
var CleanWebpackPlugin = require("clean-webpack-plugin")
var OpenBrowserPlugin = require("open-browser-webpack-plugin")
var path = require("path")

module.exports = {
  entry: {
    bundle1: "./main1.js",
    bundle2: "./main2.js",
  },
  output: {
    filename: "[name][hash:8].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlwebpackPlugin({
      // 自动生成html
      title: "multi-enrty-demo", // 设置生成的HTML文件的标题
      filename: "index.html", // 默认为 index.html
    }),
    new OpenBrowserPlugin({
      // 自动打开浏览器
      url: "http://localhost:8080",
    }),
  ],
}
