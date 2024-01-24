import { defineConfig } from 'tsup'
import { copyApp } from './script/post-build'
import { APP_DIR, APP_OUT_DIR } from './src/constant';


export default defineConfig({
  entry: ['./src/cli/index.ts'],
  outDir: './dist/node',
  format: ['cjs', 'esm'],
  shims: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  async onSuccess() {
    copyApp(APP_DIR, APP_OUT_DIR)
  },
})
