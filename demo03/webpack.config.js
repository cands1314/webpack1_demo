module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 匹配需要转换的文件类型
        exclude: /node_modules/, // 排除文件
        use: {
          loader: 'babel-loader', // 使用的loader
          options: {
            presets: ['es2015', 'react'] // 使用预定义的转换规则处理代码
          }
        }
      }
    ]
  }
};
