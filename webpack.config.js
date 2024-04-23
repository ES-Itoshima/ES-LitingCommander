'use strict'

const isDev = process.env.NODE_ENV !== 'production'

const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.join(__dirname, './src/renderer/index.ts'),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentedSyntax: true
            }
          }
        }],
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: 'vue-html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'imgs/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, './dist/renderer'),
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src/renderer'),
      vue$: 'vue/dist/vue.esm.js',
    },
    fallback: {
      path: require.resolve('path-browserify'),
      assert: require.resolve('assert/'),
    },
    extensions: ['.js', '.ts', '.vue', '.json', '.css'],
  },
  target: 'web',
}
