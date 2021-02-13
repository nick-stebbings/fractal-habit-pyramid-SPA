// Layouts
import Layout from "./components/index";

// Individual pages
//.. by date
// .. by domain

// Components
import MainStage from "./components/layout/MainStage.jsx";

const appFactory = function () {
  return {
    view: () => m(MainStage)
  }
}

// namespace
let App = appFactory();

const Routes = {
  "/": {
    render: function () {
      return m(Layout, m(appFactory()));
    },
  },
  "/test1": {
    render: function () {
      return m(Layout, m(appFactory()));
    },
  },
  "/test2": {
    render: function () {
      return m(Layout, m(App));
    },
  },
};

const DefaultRoute = "/";

export {
  Routes,
  DefaultRoute
};