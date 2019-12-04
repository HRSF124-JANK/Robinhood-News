let path = require('path')

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["babel-plugin-styled-components"]
          }
        }
      },
      {
        use: {
          {
            loader: 'file-loader',
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
