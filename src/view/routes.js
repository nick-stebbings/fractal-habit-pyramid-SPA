import PageLayout from "./components/layouts/standard-layout";
import HabitLayout from "./components/layouts/habit-layout";

// Models
import HabitNodes from "../models/index";
// Individual pages
import IndexPage from "./pages/landing-page";
// View
import App from "./components/layouts/App.jsx";

// Components
// import DateBanner from "./view/components/ui/DateBanner.jsx";

// namespace
const hht = function() {
  var model = HabitNodes;

  return {
    oninit: model.loadList,
    view: App.view,
    controller: function() {
      this.list = model.list;
    }
  }
}

const Routes = {
  // "/list": {
  //   render: function () {
  //     return m(hht());
  //   },
  // },
  "/new": {
    render: function () {
      return m(PageLayout, m(IndexPage));
    },
  },
  "/edit/:id": {
    render: function () {
      return m(PageLayout, m(IndexPage));
    },
  },
  "/test": {
    render: function () {
      return m(PageLayout, m(IndexPage));
    },
  },
};

const DefaultRoute = "/test";

export { Routes, DefaultRoute };