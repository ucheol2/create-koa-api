import Router from 'koa-router'

// import { resourcesRoute } from 'lib/router'
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'HELLO This is create-koa-api'
})
// resourcesRoute(router, 'posts', { only: ['index', 'show'] })

export default router
