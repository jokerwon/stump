import glob from 'fast-glob'
import { resolve } from 'path'

export async function getAllImages(root: string) {
  if (!root) {
    throw new Error('required scanning <Dir> but got null.')
  }
  let images = []
  try {
    images = await glob('**/*.png', {
      cwd: root,
      stats: true,
      ignore: ['node_modules'],
    })
  } catch (error) {
    console.error('getAllImages error, ', error)
  }
  return images.map((img) => ({
    ext: { ...img },
    path: img.path,
    absPath: resolve(root, img.path),
    name: img.name,
  }))
}
