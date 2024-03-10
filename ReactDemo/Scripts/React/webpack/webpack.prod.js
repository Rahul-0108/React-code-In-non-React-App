const webpack = require('webpack');

module.exports = {
  mode: 'production', // for prod, the code is minified in bundle file
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      // define env variables
      'process.env.name': JSON.stringify('Test'),
    }),
  ],
};
