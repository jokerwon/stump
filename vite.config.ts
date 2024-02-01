import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { presetUno, presetIcons } from 'unocss'
import UnoCSS from 'unocss/vite'
import { APP_DIR, APP_OUT_DIR, PORT_CLIENT } from './src/constant'

const cwd = process.cwd()

export default defineConfig({
  root: process.env.STUMP_MODE === 'development' ? APP_DIR : APP_OUT_DIR,
  server: {
    port: PORT_CLIENT,
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
  plugins: [
    UnoCSS({
      shortcuts: {
        'border-base': 'border-gray-200 dark:border-dark-100',
        'border-dark-only': 'border-transparent dark:border-dark-100',
        'bg-base': 'bg-white dark:bg-[#181818]',
        'color-base': 'text-gray-900 dark:text-gray-300',
        'color-fade': 'text-gray-900:50 dark:text-gray-300:50',
        'icon-button': 'op50 hover:op100 my-auto',
      },
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      theme: {
        colors: {
          primary: 'var(--theme-color)',
          dark: {
            100: '#222',
            200: '#333',
            300: '#444',
            400: '#555',
            500: '#666',
            600: '#777',
            700: '#888',
            800: '#999',
            900: '#aaa',
          },
        },
      },
    }),
    react(),
  ],
  optimizeDeps: {
    include: ['react-dom/**/*', 'classnames'],
  },
})
