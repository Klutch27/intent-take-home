  
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './assets/index.js',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Gareth Leake',
      template: './assets/index.html'
    })],
    module: {
      rules: [ {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }

        },
        { 
          test: /\.css$/,
          exclude: /node_modules/, 
          use: ['style-loader', 'css-loader']
         },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
          'file-loader',
          ],
        },
      ]
  },
  devServer: {
    contentBase: path.join(__dirname, './assets'),
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    }

  },
  devtool: 'source-map'

};