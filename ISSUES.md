### CLI

###### Error: Cannot find module 'react-refresh/package.json'
将 `package.json` 中依赖 @vitejs/plugin-react 移动到 `dependencies` 中。

### Client
###### The request url "xxx" is outside of Vite serving allow list.
修改 vite [`config.server.fs.strict`](https://cn.vitejs.dev/config/server-options#server-fs-strict) 为 `false`。
