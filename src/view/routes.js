// Layouts
import Layout from "./components/index";

// Individual Component Pages
import AddHabit from "./components/habits/AddHabit.jsx";
import HabitList from "./components/habits/HabitList.jsx";
import HabitTree from "./components/vis/HabitTree.jsx";
import RadialTree from "./components/vis/RadialTree.jsx";

// Libraries
import { select } from "d3-selection";
import { p, pageMaker } from "./utilities";


const Routes = {
  "/habits/list": {
    render: function () {
      return m(Layout, m(pageMaker(HabitList)));
    },
  },
  "/habits/new": {
    render: function () {
      return m(Layout, m(pageMaker(AddHabit)));
    },
  },
  "/vis/habit-tree": {
    render: function () {
      return m(Layout, m(pageMaker(HabitTree)));
    },
  },
  "/vis/radial-tree": {
    render: function () {
      return m(Layout, m(pageMaker(RadialTree)));
    },
  },
};

const DefaultRoute = "/habits/list";

export {
  Routes,
  DefaultRoute
};