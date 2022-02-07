const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => ({
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
    }),
    new Dotenv({
      path: (env.development) ?  `./.env.development` :  `./.env.production`
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
});