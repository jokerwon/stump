import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/cli/index.ts'],
  outDir: 'dist/node',
  format: ['cjs', 'esm'],
  shims: true,
  splitting: false,
  sourcemap: true,
  clean: true,
})
