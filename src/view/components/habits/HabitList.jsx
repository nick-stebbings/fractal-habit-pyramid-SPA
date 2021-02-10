// src/view/components/habits/HabitList.jsx

import stream from 'mithril/stream'

// Model
import HabitNodes from "../../../models/index";

import ListCard from "../ui/ListCard.jsx";

const HabitList = (function() {
  let habitNodes = stream([]);
  HabitNodes.loadList()
    .then(response => JSON.parse(response.data).habit_nodes)
    .then(habitNodes)
    .then(() => m.redraw());

  return {
    view: () => (
      <ul>
        { 
          habitNodes().map(
            habitNode => <ListCard key={ habitNode.id } habit={ habitNode } ></ListCard>
          )
        }
      </ul>
    )
  }
})()

export default HabitList;