// src/view/components/layout/HabitView.jsx

import stream from 'mithril/stream'

// Model
import HabitNodes from "../../../models/index";

import MenuListCard from "../ui/subnav/MenuListCard.jsx";

const HabitView = (function() {
  let habitNodes = stream([]);
  HabitNodes.loadList()
    .then(response => JSON.parse(response.data).habit_nodes)
    .then(habitNodes)
    .then(() => m.redraw());

  return {
    view: () => (
      <ul>
        { habitNodes().map(
            habitNode => <MenuListCard key={ habitNode.id } habit={ habitNode } ></MenuListCard>
          ) }
      </ul>
    )
  }
})()

export default HabitView;