const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif)/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts'],
  },

  mode: 'development',
  devtool: 'source-map',

  output: {
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
