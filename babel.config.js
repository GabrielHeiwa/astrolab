const { resolve } = require("path");

module.exports = function(api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            assets: './assets',
            components: './components',
            // modules: './modules',
            // lib: './src/lib',
            // types: './src/types',
            constants: './constants',
          },
        },
      ],
    ],
  }
}
