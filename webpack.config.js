var webpack = require('webpack');

module.exports = {
  entry: [
      './app/app.js'
  ],

  output: {
      path: __dirname,
      filename: "bundle.js"
  },

  module: {
      loaders: [{
          test: /\.jsx?$/,
          loader: 'babel'
      }]
  }
};
