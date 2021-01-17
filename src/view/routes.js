// Layouts
import Layout from "./components/layout/index";

// Individual pages


// Models
// import HabitNodes from "../models/index";

// Components
import App from "./components/App.jsx";

const routes = [
  {
    label: "Domains",
    url: "/domains"
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

// namespace
const hht = function() {
  return {
    oninit: function() {
      console.log('from shell');
    },
    view: () => m(App, { routes })
  }
}

let hhtApp = hht();
const Routes = {
  // "/": {
    //   render: function () {
      //     return m(IndexPage, {routes: routeNames});
      //   },
      // },
      // "/edit/:id": {
        //   render: function () {
          //     return m(PageLayout, m(IndexPage, {routes: routeNames}));
  //   },
  // },
  "/test": {
    render: function () {
      return m(Layout, m(hhtApp));
    },
  },
};

const DefaultRoute = "/test";

export { Routes, DefaultRoute };