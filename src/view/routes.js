// Layouts
import Layout from "./components/index";

// Individual pages
//.. by date
// .. by domain

// Components
import MainStage from "./components/layout/MainStage.jsx";

const routes = [{
    label: "Objectives",
    url: "/objectives"
  },
  {
    label: "Habits",
    url: "/habits"
  },
  {
    label: "Visualise",
    url: "/vis"
  },
];

const appFactory = function () {
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

const DefaultRoute = "/test1";

export {
  Routes,
  DefaultRoute
};