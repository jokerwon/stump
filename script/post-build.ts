import { copy } from 'fs-extra/esm'

export function copyApp(appDir: string, outDir: string) {
  copy(appDir, outDir)
}
