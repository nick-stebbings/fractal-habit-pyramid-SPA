// src/views/nodeList.js

export default {
    view: ({ children }) => {
      return m(
        "ul",
        children.map(function (node) {
          return m("li", node.id);
        })
      );
    },
  };