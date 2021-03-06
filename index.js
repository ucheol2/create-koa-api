'use strict'

import Koa from 'koa'
import logger from 'koa-logger'
import { ArgumentParser } from 'argparse'

import router from 'config/routes'

const argparser = new ArgumentParser({
  addHelp: true
})
const app = new Koa()

argparser.addArgument(
  [ '--port' ],
  {
    help: 'listening port',
    defaultValue: 4000
  }
)
const args = argparser.parseArgs()

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(args.port, () => {
  console.log(`Server is listening to port ${args.port}`)
})
