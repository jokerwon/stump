import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

;(async () => {
  const server = await createServer({
    root: './src/client/app',
    server: {
      port: 9527,
      cors: true,
    },
    plugins: [react(), UnoCSS()],
  })
  await server.listen()

  server.printUrls()
  server.bindCLIShortcuts({ print: true })
})()
