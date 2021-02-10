const {
  merge
} = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: __dirname + "/images",
    filename: "main.js",
    filename: "[name].bundle.js",
  },
  devServer: {
    inline: true,
    hot: true,
    // open: true,
    contentBase: "./src/assets/images",
    // Send API requests on localhost to API server get around CORS.
    proxy: {
      "/api": {
        target: {
          host: "0.0.0.0",
          protocol: "http:",
          port: 9292,
        },
        pathRewrite: {
          // '^/api': ''
        },
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // inject CSS to page
          },
          {
            loader: "css-loader", // translates CSS into CommonJS modules
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "postcss-loader", // Run post css actions
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
    ],
  },
});