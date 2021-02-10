// src/view/components/habits/HabitList.jsx

import stream from 'mithril/stream'

// Model
import HabitNodes from "../../../models/index";

// Components
import CardSection from '../layout/CardSection.jsx';

const HabitList = (function() {
  let habitNodes = stream([]);
  HabitNodes.loadList()
    .then(response => JSON.parse(response.data).habit_nodes)
    .then(habitNodes)
    .then(() => m.redraw());

  return {
    view: () => (
      <CardSection cards={ habitNodes() }></CardSection>
    )
  }
})()

export default HabitList;