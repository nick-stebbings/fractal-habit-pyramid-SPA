// src/views/nodeList.js

var HabitNodes = require("../models/HabitNodes.js");

module.exports = {
  oninit: HabitNodes.loadList,
  view: function () {
    return m(
      "ul",
      HabitNodes.list.map(function (node) {
        return m("li", node.id);
      })
    );
  },
};