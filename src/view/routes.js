// Layouts
import Layout from "./components/layout";
import MainStage from "./components/layout/MainStage.jsx";

// Individual Component Pages
import AddHabit from "./components/habits/AddHabit.jsx";
import HabitList from "./components/habits/HabitList.jsx";
import HabitTree from "./components/vis/HabitTree.jsx";
import RadialTree from "./components/vis/RadialTree.jsx";

// Libraries
import { pageMaker } from "./utilities";

const Routes = {
  "/habits/list": {
    render: function () {
      return m(Layout, m(pageMaker(MainStage, HabitList)));
    },
  },
  "/habits/new": {
    render: function () {
      return m(Layout, m(pageMaker(MainStage, AddHabit)));
    },
  },
  "/vis/habit-tree": {
    render: function () {
      return m(Layout, m(pageMaker(MainStage, HabitTree)));
    },
  },
  "/vis/radial-tree": {
    render: function () {
      return m(Layout, m(pageMaker(MainStage, RadialTree)));
    },
  },
};

const DefaultRoute = "/habits/list";

export {
  Routes,
  DefaultRoute
};