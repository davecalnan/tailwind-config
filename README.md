# Tailwind Config
> Easily get values from your resolved Tailwind CSS config.

```js
import tailwind from 'tailwind-config'

const config = tailwind.config('./tailwind.config')
config.theme.colors.black // '#000'
```

## Inspiration
I often like to import values from my Tailwind CSS config file to keep things consistent.

Before tailwindcss@1.0.0, you could easily just import your config file from within your project. After 1.0, your config is merged with the [default config](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js) in the `tailwindcss` package.

This package merges your config with the default config, just like Tailwind does, so you can easily get those values.

## Installation
Make sure you have either [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) installed.
```
npm install tailwind-config
# or
yarn add tailwind-config
```

## Usage
### Get the theme object
```js
import tailwind from 'tailwind-config'
/* or */
const tailwind = require('tailwind-config')

/* get the theme object */
const theme = tailwind.theme('./relative/path/to/your/tailwind.config')

/* get the value of a specific color */
theme.colors.red[100] // '#fff5f5'

/* use object descructuring */
const { screens, spacing } = tailwind.theme('./relative/path/to/your/tailwind.config')
screens.md // '768px'
spacing.12 // '3rem'
```
Make sure to replace `./relative/path/to/your/tailwind.config` with the actual [relative path](https://www.lifewire.com/absolute-and-relative-paths-3466467) to your tailwind config. Alternatively you can [pass an object](#pass-the-path-to-your-config-file-or-the-config-object itself), or pass nothing to just use the [default config](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js).

[What is object destructuring?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)

### Get the whole config
```js
tailwind.config('./relative/path/to/your/tailwind.config')

const theme = config.theme
const plugins = config.plugins
/* ...etc */
```
### Helper functions
Functions exist for each of the top level keys on the config object, as well as the config object itself:

```js
tailwind.config()
tailwind.corePlugins()
tailwind.important()
tailwind.plugins()
tailwind.prefix()
tailwind.separator()
tailwind.theme()
tailwind.variants()
```

For a list of all the values on the config object, see the [Tailwind github repo](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js).

### Import just the function you want
```js
import { separator } from 'tailwind-config'
/* or */
const { separator } = require('tailwind-config')

separator('./relative/path/to/your/tailwind.config') // ':'
```

## Pass the path to your config file or the config object itself
```js
const config = tailwind.config('./relative/path/to/your/tailwind.config')
/* or */
import config from '../tailwind.config'
const resolvedConfig = tailwind.config(config)
```

## Issues
For any bugs you may experience, please [open an issue](https://github.com/davecalnan/tailwind-config/issues).