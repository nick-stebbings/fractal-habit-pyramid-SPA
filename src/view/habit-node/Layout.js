// src/views/Layout.js

module.exports = {
  view: function (vnode) {
    return m("main.layout", [
      m("nav.menu", [
        m(m.route.Link, { href: "/list" }, "Habit Nodes List"),
        m(m.route.Link, { href: "/new" }, "New Habit Nodes"),
        m(m.route.Link, { href: "/edit/2" }, "Edit Habit Node"),
      ]),
      m("section", vnode.children),
    ]);
  },
};