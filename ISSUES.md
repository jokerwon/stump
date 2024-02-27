# Issues

### CLI

###### Error: Cannot find module 'react-refresh/package.json'

将 `package.json` 中依赖 @vitejs/plugin-react 移动到 `dependencies` 中。

### Client

###### The request url "xxx" is outside of Vite serving allow list.

修改 vite [`config.server.fs.strict`](https://cn.vitejs.dev/config/server-options#server-fs-strict) 为 `false` 来允许访问 `root` 路径之外的文件。

###### 'xxx' does not provide an export named 'default'

`Uncaught SyntaxError: The requested module '/@fs/Users/jokerwon/Library/pnpm/global/5/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js?v=ceb6d56f' does not provide an export named 'default'`

由于全局安装 `stump` 后，其工作目录位于全局的 `node_modules` 中，而 vite 的依赖预构建会过滤掉 `node_modules` 中的文件，导致无法正常通过 `import` 来引入 `umd` 规范的 `react-dom` 模块。

在 `vite.config` 中加入配置 `optimizeDeps.include`
```javascript
optimizeDeps: {
  include: ['react-dom/**/*'],
}
```
