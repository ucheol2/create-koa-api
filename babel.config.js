module.exports = (api) => {
  api.cache(false)

  const presets = [
    '@babel/preset-env'
  ]
  const plugins = [
    ['module-resolver', {
      'root': ['./']
    }]
  ]

  return {
    presets,
    plugins
  }
}
