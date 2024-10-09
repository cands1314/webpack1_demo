var load = require('bundle-loader!./a.js'); // 异步加载模块

load(function(file) { // 异步加载模块
  document.open();
  document.write('<h1>' + file + '</h1>');
  document.close();
});
