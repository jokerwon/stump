import { createServer } from 'vite'

;(async () => {
  const server = await createServer({
    configFile: './src/app/vite.config.ts',
    root: './src/app',
    server: {
      port: 1337,
      proxy: {},
      cors: true,
    },
  })
  await server.listen()

  server.printUrls()
  server.bindCLIShortcuts({ print: true })
})()
