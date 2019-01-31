const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = {
  // entry: "./src/foo.js",
  // entry: "./src/foo_foo.js",
  // entry: "./src/foo_foo_foo.js",
  // entry: "./src/foo_foo_foo_foo.js",
  // entry: "./src/foo_foo_foo_foo_foo.js",
  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test : /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
        use : 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlWebpackPlugin]
};