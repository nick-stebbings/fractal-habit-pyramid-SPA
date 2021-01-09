const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const rolllupJson = require("@rollup/plugin-json");
const builtins = require("rollup-plugin-node-builtins");
const globals = require("rollup-plugin-node-globals");

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: "build",
    },

    less: {
      debug: {
        files: {
          "build/style.css": "public/css/layout.less",
        },
      },
    },

    rollup: {
      debug: {
        options: {
          format: "iife",
          name: "hht",
          sourceMap: "inline",
          plugins: [
            resolve({ preferBuiltins: true, browser: true }),
            commonjs(),
            rolllupJson(),
            builtins(),
            globals(),
          ],
        },
        files: {
          "build/bundle.js": "src/main.js",
        },
      },
    },
    watch: {
      rebuild: {
        files: ["src/**/*.js"],
        tasks: ["build:debug"],
      },

      livereload: {
        options: {
          livereload: true,
        },
        files: ["public/**/*.{css,js,less}"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-rollup");
  grunt.loadNpmTasks("grunt-contrib-watch");
  // grunt.loadNpmTasks("gruntify-eslint");

  grunt.registerTask("build:debug", "Compile", [
    "clean",
    "rollup",
  ]);
  grunt.registerTask("dev", ["build:debug", "watch"]);
};
