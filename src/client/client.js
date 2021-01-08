import axios from "axios";

export default (function () {
  return {
    get_all: function () {
      return axios.get("/api/habit_trees");
    },

    create_node: function (parent_node) {
      return axios.post("/api/habit_trees/nodes", { parent_id: parent_node });
    },

    show_one_node: function (id) {
      return axios.get("/api/habit_trees/nodes/" + id);
    },

    delete_node: function (id) {
      return axios.delete("/api/habit_trees/nodes/" + id);
    },
  };
})();