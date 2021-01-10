import PageLayout from "./components/standard-layout";
import HabitLayout from "./components/habit-layout";

// Individual pages
import IndexPage from "./pages/landing-page";

const Routes = {
  "/list": {
    render: function () {
      return m(HabitLayout, m(nodeList));
    },
  },
  "/new": {
    render: function () {
      return m(HabitLayout, m(addNode));
    },
  },
  "/edit/:id": {
    render: function (vnode) {
      return m(HabitLayout, m(editNode, vnode.attrs));
    },
  },
  "/test": {
    render: function () {
      return m(PageLayout, m(IndexPage));
    },
  },
};

const DefaultRoute = "/list";

export { Routes, DefaultRoute };