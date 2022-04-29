const HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    clean: true,
  },
  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },

      {
        test: /\.html$/,
        loader: 'html-loader',
      },

      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]',
        },
      },

      {
        test: /\.(css)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'style-loader',
          },
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
};
