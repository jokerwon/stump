import { resolve } from 'path'
import { createServer, preview } from 'vite'

export async function startClient(context?: Context) {
  const server = await createServer({
    configFile: resolve('./vite.config.ts'),
  })
  await server.listen()
  // const server = await preview({
  //   // 任何有效的用户配置项，将加上 `mode` 和 `configFile`
  //   configFile: resolve('./vite.config.ts'),
  //   preview: {
  //     port: 9527,
  //     cors: true,
  //     open: true,
  //   },
  // })
  server.printUrls()
  return server
}
