import axios from 'axios';

axios.defaults.baseURL = "/api";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8";

export default (function() {
  const basePath = "/habit_trees/nodes"

  return {
    get_tree: () => axios.get("/habit_trees"),
    get_all: () => axios.get(basePath),
    show_one_node: (id) => axios.get(`${basePath}/${id}`),
    create_node: (parent_node) => axios.post(basePath, { parent_id: parent_node }),
    delete_node: (id) => axios.delete(`${basePath}/${id}`),

    put_node: (id) => axios.put(`${basePath}/${id}`),
    patch_node: (id) => axios.patch(`${basePath}/${id}`),
  };
})();