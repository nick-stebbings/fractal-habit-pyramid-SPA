// src/models/nodes.js
import client from "../client/client";

const HabitNode = {
  show: client.show_one_node,
  load: client.get_all,
  save: client.create_node,
  delete: client.delete_node,
};
// update: client.update_node,

const HabitNodes = {
  loadList: HabitNode.load,
  tree: client.get_tree,
  current: {},
  load: function(id) {
    return HabitNode
      .show(id)
      .then(function (result) {
        this.current = result.data;
    });
  },
};

export default HabitNodes;