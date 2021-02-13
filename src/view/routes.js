// Layouts
import Layout from "./components/index";

// Individual pages
import HabitList from "./components/habits/HabitList.jsx";
import HabitTree from "./components/vis/HabitTree.jsx";
import RadialTree from "./components/vis/RadialTree.jsx";

// Components
import MainStage from "./components/layout/MainStage.jsx";

let page = function (mainView) {
  return {
    view: () => m(MainStage, { page: mainView }),
  };
};

const Routes = {
  "/": {
    render: function () {
      return m(Layout, m(page(HabitList)));
    },
  },
  "/vis/habit-tree": {
    render: function () {
      return m(Layout, m(page(HabitTree)));
    },
  },
  "/vis/radial-tree": {
    render: function () {
      return m(Layout, m(page(RadialTree)));
    },
  },
};

const DefaultRoute = "/";

export {
  Routes,
  DefaultRoute
};