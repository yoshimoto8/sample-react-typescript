const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MODE = 'development'

module.exports = [{
    mode: MODE,
    entry: './src/index.tsx',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map', 
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /\.(gif|png|jpg)$/,
          loader: 'url-loader'
        }
      ]
    },
  },
  {
    mode: MODE,
    entry: {
      style: './src/stylesheets/style.scss'
    },
    output: {
      path: `${__dirname}/dist`,
      filename: 'index.css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader:  ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('index.css'),
    ],
  }
];