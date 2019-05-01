const path = require('path')
const resolveConfig = require('tailwindcss/lib/util/resolveConfig').default
const defaultConfig = require('tailwindcss/stubs/defaultConfig.stub')

const getUserConfig = userConfig => {
  if (typeof userConfig === 'object') return userConfig
  if (typeof userConfig === 'undefined') return {}
  if (typeof userConfig === 'string') {
    try {
      return require(path.resolve(
        path.dirname(module.parent.filename),
        userConfig
      ))
    } catch (error) {
      throw new Error(`Could not find config at ${userConfig} relative to ${path.dirname(module.parent.filename)}. Please check the relative file path provided or else import your config and pass that.`)
    }
  }
  throw new TypeError('Invalid input. Please provide the path to a Tailwind CSS config file or the config object itself.')
}

module.exports = {
  config: userConfig => resolveConfig([getUserConfig(userConfig), defaultConfig]),
  corePlugins: userConfig => resolveConfig([getUserConfig(userConfig), defaultConfig]).corePlugins,
  important: userConfig => resolveConfig([getUserConfig(userConfig), defaultConfig]).important,
  plugins: userConfig => resolveConfig([getUserConfig(userConfig), defaultConfig]).plugins,
  prefix: userConfig => resolveConfig([getUserConfig(userConfig), defaultConfig]).prefix,
  separator: userConfig => resolveConfig([getUserConfig(userConfig), defaultConfig]).separator,
  theme: userConfig => resolveConfig([getUserConfig(userConfig), defaultConfig]).theme,
  variants: userConfig => resolveConfig([getUserConfig(userConfig), defaultConfig]).variants
}
