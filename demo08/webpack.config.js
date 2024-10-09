var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({ // 自动生成html
      title: 'Webpack-demos',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({ // 自动打开浏览器
      url: 'http://localhost:8080'
    })
  ]
};
