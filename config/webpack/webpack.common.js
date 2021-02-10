const Path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  entry: {
    main: "./src/index.jsx",
    vendor: "./src/vendor.js",
    // publicPath: "/images/",
  },
  plugins: [
    new webpack.ProvidePlugin({
      m: "mithril", //Global access
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // {
      //   test: /\.woff$/,
      //   use: 'url-loader?mimetype=application/font-woff&name=/fonts/[name].[ext]'
      // },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /assets\/(images|icons)\/.*\.(svg|png|jpg|jpeg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "/images/[name].[ext]",
        },
      },
      // {
      //   test: /assets\/icons\/mega-menu\/.*\.svg$/,
      //   loader: "svg-sprite-loader",
      //   options: {
      //     extract: true,
      //     spriteFilename: "icons.svg",
      //     outputPath: 'images/sprites/',
      //     publicPath: 'sprites/'
      //   },
      // },
    ],
  },
  node: {
   fs: "empty"
  },
  watch: true,
};