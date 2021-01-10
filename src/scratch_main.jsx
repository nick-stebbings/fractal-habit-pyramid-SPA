const client = require('./client/client');
const routes = require('./view/routes');

let hht = {};

//models
let hhtHabitNode = {
  show: client.show_one_node,
  load: client.get_all,
  save: client.create_node,
  // update: client.update_node,
  delete: client.delete_node,
}

m.route(document.body, "/list", routes); 