// src/models/nodes.js
let client = require('../client/client').default;

let HabitNodes = {
  list: [],
  loadList: function() {
    return client
      .get_all()
      .then(function (result) {
      HabitNodes.list = JSON.parse(result.data)["habit_nodes"];
      m.redraw();
    });
  },
  current: {},
  load: function(id) {
    return client
      .show_one_node(id)
      .then(function (result) {
      console.log(JSON.parse(result.data));
      HabitNodes.current = result.data;
      m.redraw();
    });
  },
};

module.exports = HabitNodes