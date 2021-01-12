// src/views/addNode.js

module.exports = {
  view: function () {
    return m("form", [
      m("label.label", "Parent_ID"),
      m("input.input[type=text][placeholder=ParentID]"),
      m("button.button[type=button]", "Save"),
    ]);
  },
};
