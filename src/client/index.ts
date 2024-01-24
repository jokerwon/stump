import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export async function startClient(context?: Context) {
  const server = await createServer({
    // TODO: 修改为客户端存放的地址
    root: '/Users/jokerwon/workspace/jokerwon/stump/src/client/app',
    server: {
      port: 9527,
      cors: true,
      fs: {
        // 允许访问 root 以外的文件
        strict: false,
      }
    },
    plugins: [react(), UnoCSS()],
  })
  await server.listen()

  server.printUrls()
  server.bindCLIShortcuts({ print: true })

  return server
}

startClient();
