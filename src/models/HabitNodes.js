// src/models/nodes.js
var client = require('../client/client').default;

let HabitNodes = {
  list: [],
  loadList: function () {
    return client
      .get_all()
      .then(function(result){
        HabitNodes.list = JSON.parse(result.data)["habit_nodes"];
        m.redraw();
        console.log(HabitNodes.list, 'after promise');
      })
  },
};

module.exports = HabitNodes