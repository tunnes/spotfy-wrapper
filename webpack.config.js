
const path = require('path');

module.exports = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'SpotifyWrapper',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
