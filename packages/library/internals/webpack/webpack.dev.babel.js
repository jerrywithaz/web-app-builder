/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;

const styledComponentsTransformer = createStyledComponentsTransformer();
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'development',

  // Add hot reloading in development
  entry: [
    path.join(process.cwd(), 'app/index.ts'), // Start with js/app.js
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  // Add development plugins
  plugins: [
    new ErrorOverlayPlugin(),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],

  tsLoaders: [
    { loader: 'babel-loader' }, // using babel after typescript transpiles to target es6
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true, // fork-ts-checker-webpack-plugin is used for type checking
        logLevel: 'info',
        getCustomTransformers: () => ({
          before: [styledComponentsTransformer],
        }),
      },
    },
  ],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-source-map',

  performance: {
    hints: false,
  },
});
