// src/index.js

let nodeList = require("./views/nodeList");
let addNode = require("./views/addNode");
let editNode = require("./views/editNode");

let Layout = require("./views/Layout");

module.exports = {
  "/list": {
    render: function () {
      return m(Layout, m(nodeList));
    },
  },
  "/new": {
    render: function () {
      return m(Layout, m(addNode));
    },
  },
  "/edit/:id": {
    render: function (vnode) {
      return m(Layout, m(editNode, vnode.attrs));
    },
  },
};