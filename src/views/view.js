// src/views/view.js

var HabitNode = require("../models/nodes.js");
module.exports = {
  oninit: HabitNode.loadList,
  view: function () {
    return m(
      ".node-list",
      HabitNode.list.map(function (node) {
        return m(".node-list-item", node.parent_id);
      })
    );
  },
};