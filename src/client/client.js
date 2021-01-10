import axios from 'axios';
let host = "http://localhost:9393";
axios.defaults.baseURL = host;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8";

export default (function() {
  return {
    get_all: function() {
      return axios.get("/api/habit_trees/nodes");
    },

    create_node: function(parent_node) {
      return axios.post("/api/habit_trees/nodes", { parent_id: parent_node });
    },

    show_one_node: function(id) {
      return axios.get("/api/habit_trees/nodes/" + id);
    },

    delete_node: function(id) {
      return axios.delete("/api/habit_trees/nodes/" + id);
    },
  };
})();