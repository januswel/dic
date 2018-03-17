const path = require('path')
const webpack = require('webpack')

const ENV_KEYS = ['API_KEY', 'PROJECT_ID', 'MESSAGING_SENDER_ID', 'DATABASE_NAME']

const generateEnv = keys => {
  const result = {}
  keys.forEach(key => {
    result[key] = process.env[key]
  })
  return JSON.stringify(result)
}

module.exports = {
  entry: {
    index: [path.resolve(__dirname, 'src/index.js')],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': generateEnv(ENV_KEYS),
    }),
  ],
}
