import Koa from 'koa'
import Router from 'koa-router'
import cors from './koa-cors'
import { getAllImages } from '../lib'

const router = new Router()
const app = new Koa()

app.use(cors)

export function startServer(context: Context) {
  const { root } = context

  router.get('/images', async (ctx: any) => {
    const images = await getAllImages(root)
    ctx.body = { list: images }
  })

  app.use(router.routes())

  app.listen(9528, () => {
    console.log('\nserver is running at http://localhost:9528\n')
  })
}
