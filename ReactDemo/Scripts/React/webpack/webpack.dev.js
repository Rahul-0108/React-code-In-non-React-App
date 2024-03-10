const webpack = require('webpack');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development', // for developement, the code is not minified in bundle file
  devtool: 'cheap-module-source-map', // for source code mapping from bundles to original code
  plugins: [
    // new ReactRefreshWebpackPlugin(), // on save, with hot reloading, the state of components is retained(only required for dev environmnt)
    new webpack.DefinePlugin({
      // define env variables
      'process.env.name': JSON.stringify('Test'),
    }),
  ],
  watch: true,
  watchOptions: {
    // for some systems, watching many files can result in a lot of CPU or memory usage
    // https://webpack.js.org/configuration/watch/#watchoptionsignored
    // don't use this pattern, if you have a monorepo with linked packages
    ignored: /node_modules/,
  },
};
