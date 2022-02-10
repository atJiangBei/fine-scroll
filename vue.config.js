'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = process.env.port || 9529;

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  chainWebpack: (config) => {
    // config.module
    //   .rule('md')
    //   .test(/\.md/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('vue-markdown-loader')
    //   .loader('vue-markdown-loader/lib/markdown-compiler')
    //   .options({
    //     raw: true,
    //   });
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('custom-loader')
      .loader('./custom-loader');
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
};
