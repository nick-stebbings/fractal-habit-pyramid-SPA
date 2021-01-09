// src/models/nodes.js
var client = require('../client/client').default;

let HabitNode = {
  list: [],
  loadList: function () {
    return client.get_all().
      then(function(result){
        HabitNode.list = result.data['children']
      })
  },
};

module.exports = HabitNode