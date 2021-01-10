// src/index.js

let nodeList = require("./views/nodeList");

m.route(document.body, "/list", {
    "/list": nodeList
});