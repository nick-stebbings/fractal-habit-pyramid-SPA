const client = require('../client/client');
const routes = require('../view/routes');
import "../assets/scss/app.scss";
// import App from "./view/components/layouts/App.jsx";

// Components
// import DateBanner from "./view/components/ui/DateBanner.jsx";

//models
let hhtHabitNode = {
  show: client.show_one_node,
  load: client.get_all,
  save: client.create_node,
  // update: client.update_node,
  delete: client.delete_node,
}
const habitView = () => (
  <App>
    <DateBanner></DateBanner>
  </App>
);
const $root = document.body.querySelector("#app");
m.render($root, habitView()); 