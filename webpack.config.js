const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js',
    culture: './src/pages/culture/culture.js',
    digital: './src/pages/digital/digital.js',
    training: './src/pages/training/training.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 },
        },
          'postcss-loader']
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Yum!',
      template: './src/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      title: 'Yum! - Digital',
      filename: 'digital.html',
      template: './src/digital.html',
      chunks: ['digital'],
    }),
    new HtmlWebpackPlugin({
      title: 'Yum! - Культура KFC',
      filename: 'culture.html',
      template: './src/culture.html',
      chunks: ['culture'],
    }),
    new HtmlWebpackPlugin({
      title: 'Yum! - Обучение ресторанов',
      filename: 'training.html',
      template: './src/training.html',
      chunks: ['training'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}