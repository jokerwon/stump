import { createServer } from 'vite'
import { getViteConfig } from '../utils'

export async function startClient(context?: Context) {
  const server = await createServer(getViteConfig({ server: { port: context.clientPort } }))
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
