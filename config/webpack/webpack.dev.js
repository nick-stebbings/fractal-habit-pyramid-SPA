const {
  merge
} = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
      mode: "development",
      output: {
        filename: "main.js",
        filename: "[name].bundle.js",
      },
      devServer: {
        inline: true,
        hot: true,
        // open: true,
        contentBase: "./dist",
      },
      module: {
        rules: [{
            test: /\.scss$/,
            use: [{
              loader: 'style-loader', // inject CSS to page
            }, {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'resolve-url-loader'
            }, {
            //   loader: 'postcss-loader', // Run post css actions
            //   options: {
            //     postcssOptions: {
            //       plugins: function () { // post css plugins, can be exported to postcss.config.js
            //         return [
            //           require('precss'),
            //           require('autoprefixer')
            //         ];
            //       }
            //     }
            //   }
            // }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }]
        }],
      }
    });