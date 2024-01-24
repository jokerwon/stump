import cac from 'cac'
import { version, name } from '../../package.json'
import { run } from '../core'

const cli = cac(name).version(version).help()

cli
  .command('<folder>', 'default command')
  .option('-w, --watch', 'whether switch to watch mode')
  .action((folder, opts) => {
    run(folder, opts)
  })
  .example('stump ./src/assets/img')

cli.parse()
