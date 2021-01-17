// Layouts
import PageLayout from "./components/layouts/standard-layout";
import HabitLayout from "./components/layouts/habit-layout";
// Individual pages
import IndexPage from "./pages/landing-page";

// Models
// import HabitNodes from "../models/index";
// View
// import App from "./components/layouts/App.jsx";
// Components
// import DateBanner from "./view/components/ui/DateBanner.jsx";

// namespace
const hht = function() {
  return {
    oninit: function() {
      console.log('from shell');
    },
    view: function() {
      return m.mount('.habits', HabitLayout)
    }
  }
}

const routeNames = [
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
let hhtApp = hht();

const Routes = {
  "/": {
    render: function () {
      return m(IndexPage, {routes: routeNames});
    },
  },
  "/edit/:id": {
    render: function () {
      return m(PageLayout, m(IndexPage, {routes: routeNames}));
    },
  },
  "/test": {
    render: function () {
      return m(hhtApp);
    },
  },
};

const DefaultRoute = "/test";

export { Routes, DefaultRoute };