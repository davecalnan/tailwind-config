const tailwind = require('../src/index')
const pathToUserConfig = './sample.config'
const userConfig = require(pathToUserConfig)

it ('can resolve when passed a config object', () => {
  expect(tailwind.config(userConfig)).toMatchSnapshot()
})

it('can resolve when passed a config path', () => {
  expect(tailwind.config(pathToUserConfig)).toMatchSnapshot()
})

it('can resolve when passed nothing', () => {
  expect(tailwind.config()).toMatchSnapshot()
  expect(tailwind.config(null)).toMatchSnapshot()
})

it('will throw when passed an invalid config path', () => {
  expect(tailwind.config.bind(null, 'invalid/path/to/config'))
    .toThrow(
      /Could not find config at .* relative to .*\. Please check the relative file path provided or else import your config and pass that./
    )
})

it('will throw when passed an invalid argument type', () => {
  expect(tailwind.config.bind(null, 42))
    .toThrow(
      'Invalid input. Please provide the path to a Tailwind CSS config file or the config object itself.'
    )
})

it('can resolve a corePlugins object', () => {
  expect(tailwind.corePlugins(userConfig)).toMatchSnapshot()
})

it('can resolve an important boolean', () => {
  expect(tailwind.important(userConfig)).toMatchSnapshot()
})

it('can resolve a plugins array', () => {
  expect(tailwind.plugins(userConfig)).toMatchSnapshot()
})

it('can resolve a prefix string', () => {
  expect(tailwind.prefix(userConfig)).toMatchSnapshot()
})

it('can resolve a separator string', () => {
  expect(tailwind.separator(userConfig)).toMatchSnapshot()
})

it('can resolve a theme object', () => {
  expect(tailwind.theme(userConfig)).toMatchSnapshot()
})

it('can resolve a variants object', () => {
  expect(tailwind.variants(userConfig)).toMatchSnapshot()
})
