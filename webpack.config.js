const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: "@/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules|dist/, use: "babel-loader" },
      { test: /\.vue$/, exclude: /node_modules|dist/, use: "vue-loader" },
      {
        test: /\.css$/,
        exclude: /node_modules|dist/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules|dist/,
        loader: "eslint-loader"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  },
  node: {
    setImmediate: false,
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      API_URL: "http://localhost:3000"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "static"),
        to: "."
      }
    ])
  ]
}
