import glob from 'fast-glob'
import { resolve } from 'path'

export async function getAllImages() {
  const cwd = './fixtures/img/'
  const images = await glob('**/*.png', {
    cwd,
    stats: true,
    ignore: ['node_modules'],
  })
  return images.map((img) => ({
    ext: { ...img },
    path: img.path,
    absPath: resolve(cwd, img.path),
    name: img.name,
  }))
}
