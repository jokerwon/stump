import Koa from 'koa'
import Router from 'koa-router'
import cors from './koa-cors'
import { getAllImages } from '../lib'

const router = new Router()
router.get('/', async (ctx: any) => {
  ctx.body = 'Hello World!'
})
router.get('/images', async (ctx: any) => {
  const images = await getAllImages()
  ctx.body = { list: images }
})

const app = new Koa()

app.use(cors)
app.use(router.routes())

app.listen(9528, () => {
  console.log('server is running at http://localhost:9528')
})
