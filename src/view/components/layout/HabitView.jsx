// src/view/components/layout/HabitView.jsx

import stream from 'mithril/stream'

// Model
import HabitNodes from "../../../models/index";

const HabitView = (function() {
  let habitNodes = stream([]);
  HabitNodes.loadList()
    .then(response => JSON.parse(response.data).habit_nodes)
    .then(habitNodes)
    .then(() => m.redraw());

  return {
    oninit: (vnode) => {
    },
    view: () => [m("ul",
      habitNodes().map(function (habitNode) {
        return m("li", {
          key: habitNode.id
        }, habitNode.parent_id);
      })
    )]
  }
})()

export default HabitView;