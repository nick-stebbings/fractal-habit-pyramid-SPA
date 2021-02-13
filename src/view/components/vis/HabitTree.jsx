// src/view/components/vis/HabitTree.jsx

// import tidyTree from "./tidyTree";
import "./tree-style.scss";

const HabitTree = {
  type: 'vis',
  view: ({attrs, children}) => (
    <svg id="tree" width="960" height="1000"></svg>
  )
};

export default HabitTree;