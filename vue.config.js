const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: './examples/main.js',
      template: './public/index.html',
      filename: 'index.html'
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import \'@/styles/variables.scss\';'
      }
    }
  },

  chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('./'))
    config.module
      .rule('js')
      .include.add(resolve('packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => options)
  }
}
