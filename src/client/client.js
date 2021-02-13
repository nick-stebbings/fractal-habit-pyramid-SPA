import axios from 'axios';

axios.defaults.baseURL = "/api";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8";

export default (function() {
  return {
    get_all: function() {
      return axios.get("/habit_trees/nodes");
    },

    get_tree: function() {
      return axios.get("/habit_trees");
    },

    create_node: function(parent_node) {
      return axios.post("/habit_trees/nodes", { parent_id: parent_node });
    },

    show_one_node: function(id) {
      return axios.get("/habit_trees/nodes/" + id);
    },

    delete_node: function(id) {
      return axios.delete("/habit_trees/nodes/" + id);
    },
  };
})();