import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { APP_DIR, APP_OUT_DIR } from './src/constant'

const cwd = process.cwd()

export default defineConfig({
  root: process.env.STUMP_MODE === 'development' ? APP_DIR : APP_OUT_DIR,
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
  optimizeDeps: {
    include: ['react-dom/**/*']
  },
})
