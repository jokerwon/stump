import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

const cwd = process.cwd()

export default defineConfig({
  // TODO: 修改为客户端存放的地址
  root: '/Users/jokerwon/workspace/jokerwon/stump/src/client/app',
  server: {
    port: 9527,
    cors: true,
    fs: {
      // 允许访问 root 以外的文件
      strict: false,
    },
  },
  build: {
    outDir: resolve(cwd, 'dist/app'),
  },
  plugins: [react(), UnoCSS()],
})
