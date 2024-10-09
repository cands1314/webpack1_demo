require.ensure(['./a'], function(require) { // 异步加载模块
  var content = require('./a');
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.close();
});

//为 异步加载模块 创建 non-initial chunk，这是因为是动态导入的。
// 默认情况下，这些 non-initial chunk 没有名称，因此会使用唯一 ID 来替代名称。 在使用动态导入时，我们可以通过使用 magic comment(魔术注释) 来显式指定 chunk 名称：
// https://www.webpackjs.com/concepts/under-the-hood/#chunks