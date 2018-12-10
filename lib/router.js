import * as controllers from 'app/controllers'

export const resourcesRoute = (router, resources, options = {}) => {
  if (resources) {
    let actions = ['index', 'show', 'create', 'update', 'destroy']
    const { only, except } = options
    if (only) {
      actions = actions.filter((action) => only.includes(action))
    }
    if (except) {
      actions = actions.filter((action) => !only.includes(action))
    }

    actions.forEach((action) => {
      switch (action) {
        case 'index':
          router.get(`/${resources}`, controllers[resources].index)
          break
        case 'show':
          router.get(`/${resources}/:id`, controllers[resources].show)
          break
        case 'create':
          router.post(`/${resources}`, controllers[resources].create)
          break
        case 'update':
          router.put(`/${resources}/:id`, controllers[resources].update)
          break
        case 'destroy':
          router.del(`/${resources}/:id`, controllers[resources].destroy)
          break
        default:
      }
    })
  }
}
