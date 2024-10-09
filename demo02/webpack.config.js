var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new HtmlwebpackPlugin({ // 自动生成html
      title: 'multi-enrty-demo', // 设置生成的HTML文件的标题
      filename: 'index.html', // 默认为 index.html
      // template: 'src/index.html', // 指定模版文件路径
      // chunks: ['main', 'vendor'], // 指定注入模块
      // inject: 'body', // JS文件引用方式
      // minify: {
      //     collapseWhitespace: true,
      //     removeComments: true
      // }, // 压缩方式
      // favicon: 'src/favicon.ico',
      // meta: {
      //     viewport: 'width=device-width, initial-scale=1'
      // } // 添加额外的 meta
    })
  ]
};
