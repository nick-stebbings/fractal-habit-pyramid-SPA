// src/models/nodes.js
import client from '../client';

let HabitNode = {
  list: [],
  loadList: function () {
    client.show_one_node.then(function(){
      HabitNode.list = result.data
    })
  },
};

module.exports = HabitNode