import { startClient } from '../client'
import { startServer } from '../server'

const cwd = process.cwd()

export function run(folder: string, opts = {}) {
  const context = {
    cwd,
    root: folder,
    ...opts,
  }
  console.log(context);
  
  // 启动后端服务
  try {
    startServer(context)
  } catch (error) {
    console.error('start server error, ', error)
  }

  // 启动客户端
  try {
    startClient(context)
  } catch (error) {
    console.error('start client error, ', error)
  }
}
