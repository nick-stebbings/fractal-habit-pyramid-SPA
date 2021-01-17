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
    view: () => [m("ul",
      habitNodes().map(function (book) {
        return m("li", {
          key: book.id
        }, book.parent_id);
      })
    )]
  }
})()

export default HabitView;