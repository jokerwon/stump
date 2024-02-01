import glob from 'fast-glob'
import { resolve } from 'path'

export async function getAllImages(root: string) {
  if (!root) {
    throw new Error('required scanning directory but got null.')
  }
  let images = []
  try {
    images = await glob('**/*.png', {
      cwd: root,
      stats: true,
      ignore: ['node_modules'],
    })
  } catch (error) {
    console.error('error while scanning images, ', error)
  }
  return images.map((img) => ({
    ext: { ...img },
    path: img.path,
    absPath: resolve(root, img.path),
    name: img.name.split('.')[0],
    filename: img.name,
  }))
}
