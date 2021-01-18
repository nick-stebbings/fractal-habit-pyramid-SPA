// Layouts
import Layout from "./components/index";
import habitRoutes from "./subNavRoutes";

// Individual pages
//.. by date
// .. by domain

// Components
import MainStage from "./components/layout/MainStage.jsx";

const appFactory = function (routes) {
  return {
    // oninit: function() {
    // },
    view: () => m(MainStage, {
      routes
    })
  }
}

// namespace
let App = appFactory();

const Routes = {
  "/": {
    render: function () {
      return m(Layout, m(appFactory(habitRoutes)));
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