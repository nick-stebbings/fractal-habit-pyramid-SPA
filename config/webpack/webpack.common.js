const webpack = require("webpack");
const fs = require("fs"); 
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

// App directory
const appDirectory = fs.realpathSync(path.resolve(process.cwd()));

// Gets absolute path of file within app directory
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || "localhost";

module.exports = {
  entry: {
    main: resolveAppPath("src/index.jsx"),
    vendor: resolveAppPath("src/vendor.js"),
  },
  plugins: [
    new webpack.ProvidePlugin({
      m: "mithril", //Global access
    }),
    new HtmlWebpackPlugin({
      template: resolveAppPath("src/template.html"),
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
  watch: true,
  target: "web",
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
        test: /\.svg$/,
        use: [{ loader: "raw-loader" }],
      },
      {
        test: /assets\/images\/.*\.(svg|png|jpg|jpeg|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: resolveAppPath("src/assets/images"),
          name: "[name].[ext]",
        },
      },
    ],
  },
};