// src/models/nodes.js
import client from "../client/client";

const HabitNode = {
  show: client.show_one_node,
  load: client.get_all,
  save: client.create_node,
  // update: client.update_node,
  delete: client.delete_node,
};

const HabitNodes = {
  list: [],
  loadList: function() {
    return HabitNode
      .load()
      .then(function (result) {
      HabitNodes.list = JSON.parse(result.data)["habit_nodes"];
      m.redraw();
    });
  },
  current: {},
  load: function(id) {
    return HabitNode
      .show(id)
      .then(function (result) {
      HabitNodes.current = result.data;
    });
  },
};

export default HabitNodes;