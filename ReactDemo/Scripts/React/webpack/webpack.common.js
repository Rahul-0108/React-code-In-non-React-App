const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // searches for these files
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', // use babel for transpiling for above files only
          },
        ],
      },
      {
        test: /\.(sass|scss|less|css)$/, // for handling scss files
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // 'less-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        // add transpileOnly option if you use ts- loader < 9.3.0
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, // for handling images, will copy the files in build folder
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, // for handling svgs, will copy the files in build folder
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './reactbuild'),
    filename: 'react.bundle.js',
  },
  plugins: [
    // copy-webpack-plugin is not designed to copy files generated from the build process; rather, it is to copy files that already exist in the source tree, as part of the build process.
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }],
    // }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  stats: 'errors-only',
};
