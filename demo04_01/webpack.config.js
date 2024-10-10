var HtmlwebpackPlugin = require("html-webpack-plugin")
var path = require("path")
var CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [require("autoprefixer")()]
              },
            },
          },
        ], // 从右向左解析原则
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      // 自动生成html
      title: "multi-enrty-demo", // 设置生成的HTML文件的标题
      filename: "index.html", // 默认为 index.html
    }),
    new CleanWebpackPlugin(["dist"]),
  ],
}
