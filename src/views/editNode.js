// src/views/editNode.js

let HabitNodes = require("../models/HabitNodes.js");

module.exports = {
  oninit: function(vnode) { HabitNodes.load(vnode.attrs.id) },
  view: function () {
    return m("form", [
      m("label.label", "Parent_ID"),
      m("input.input[type=text][placeholder=ParentID]", {
        value: HabitNodes.current.parent_id,
      }),
      m("button.button[type=button]", "Save"),
    ]);
  },
};
