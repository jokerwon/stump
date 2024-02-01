import getPort from 'get-port'
import { startClient } from '../client'
import { startServer } from '../server'
import { PORT_CLIENT, PORT_SERVER } from '../constant'

const cwd = process.cwd()

export async function run(folder: string, opts = {}) {
  const context = {
    cwd,
    root: folder,
    ...opts,
  } as Context

  // 启动后端服务
  try {
    context.serverPort = await getPort({ port: PORT_SERVER })
    startServer(context)
  } catch (error) {
    console.error('start server error, ', error)
  }

  // 启动客户端
  try {
    context.clientPort = await getPort({ port: PORT_CLIENT })
    startClient(context)
  } catch (error) {
    console.error('start client error, ', error)
  }

  console.log(context)
}
