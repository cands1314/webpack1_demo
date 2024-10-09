## webpack.config.js 
执行入口文件

## webpack-dev-server

用于开发环境的`Node.js Express` 服务器，它结合`webpack`构建工具的功能，可以热更新
`webpack-dev-server --open` 是一个命令，用于启动 `webpack-dev-server` 并自动打开一个新的浏览器窗口来显示你的应用。

`webpack-dev-server` 是一个小型的 `Node.js Express` 服务器，它使用 `webpack-dev-middleware` 来为通过 `webpack` 打包的资源提供服务。`--open` 参数告诉服务器在启动后打开默认浏览器

默认情况下，该命令会查找 `webpack.config.js` 文件；如果执行其他文件，可以指定位置，例如 `webpack-dev-server --config ./path/to/your/webpack.config.js`

`webpack-dev-server` 在编译之后不会写入到任何输出文件，而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 `bundle` 文件，可以通过 `dev server` 配置中的 `devMiddleware.publicPath` 选项进行修改。



安装一个将被打包到生产环境 bundle 的 package 时，应该使用 npm install --save；而在安装一个用于开发环境的 package 时（例如，linter、测试库等），应该使用 npm install --save-dev。更多信息请查看 npm 文档。