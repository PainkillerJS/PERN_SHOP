const path = require("path");

const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: "true"
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
    alias: {}
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all"
    },
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015",
        css: true,
        minify: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015"
        }
      },
      {
        test: /\.ts$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
          tsconfigRaw: require("./tsconfig.json")
        }
      },
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
          tsconfigRaw: require("./tsconfig.json")
        }
      }
    ]
  }
};
