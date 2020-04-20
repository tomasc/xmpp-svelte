const common = require('./webpack.config.js')
const merge = require('webpack-merge')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dev'),
    compress: true,
    // does not work for Svelte 3, yet
    // @see: https://github.com/sveltejs/svelte-loader/issues/74
    // hot: true,
    port: 3000,
    publicPath: "/"
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'dev/index.html'),
    })
  ],
});
