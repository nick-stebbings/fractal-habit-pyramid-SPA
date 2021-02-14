// Layouts
import Layout from "./components/index";

// Individual component pages
import HabitList from "./components/habits/HabitList.jsx";
import HabitTree from "./components/vis/HabitTree.jsx";
import RadialTree from "./components/vis/RadialTree.jsx";

// Components
import MainStage from "./components/layout/MainStage.jsx";

import * as d3 from "d3";

let pageMaker = function (mainView) {
  let page = { 
    view: () => m(MainStage, m(mainView))
  };

  if(mainView.type === 'vis'){ // If we need D3 for the view..
    // Create a visualisation-containing div element with random ID
    const divId = "svg_container_" + Math.floor(Math.random() * 1000000000) + 1;    
    page.view = () => {
      // Pass a selector to the vis component, representing the div element where D3 can mutate the DOM
      let d3Canvas = m("div", { id: divId });
      return m(MainStage,
        m(mainView, d3Canvas)
        );
    } 
    page.oncreate = function () {
      // Pass an appended SVG selection to the vis component to consume
      mainView.content(d3.select("div#" + divId)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
      );
    };
  };
  return page;
};

const Routes = {
  "/habits/list": {
    render: function () {
      return m(Layout, m(pageMaker(HabitList)));
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