var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.[hash:8]js',
    path: path.resolve(__dirname, './dist')
  }
};
