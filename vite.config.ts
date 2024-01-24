import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

const cwd = process.cwd()

export default defineConfig({
  root: './src/client/app',
  server: {
    port: 9527,
    open: true,
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
