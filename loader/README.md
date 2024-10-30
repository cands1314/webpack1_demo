# loader

## rules

`rules` 为数组

### test
匹配规则

### use

use 为字符串
``` javascript
module.exports = {
    rules: [
        {
            use: 'babel-loader'
        }
    ]
}
``` 

use 为数组
``` javascript
module.exports = {
    rules: [
        {
            use: ['css-loader', 'style-loader']
        }
    ]
}
```


user 为对象数组
```javascript
module.exports = {
    rules: [
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
    ]
}
```

## babel-loader

`webpack`插件，在构建中生成`HTML`文件，并根据配置自动将打包生成的`js`文件注入到`HTML`文件中;


