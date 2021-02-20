const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.join(__dirname, "bin"),
    filename: "[name].bundle.js",
  },
  plugins: [
    // new ESLintPlugin({
    //   overrideConfigFile: ".eslintrc",
    //   emitWarning: true,
    // }),
  ],
  devServer: {
    inline: true,
    hot: true,
    contentBase: "/",
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