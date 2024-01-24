import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    cli: './src/cli/index.ts',
    server: './src/server/index.ts',
    client: './src/client/index.ts',
  },
  outDir: 'dist',
  format: ['cjs', 'esm'],
  shims: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  // banner: {
  //   js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);',
  // },
})
