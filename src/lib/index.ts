import glob from 'fast-glob'

export function getAllImages() {
  const images = glob.sync('**/*.png', {
    cwd: './fixtures/img/',
    
  })
  console.log(images)
  return images
}
