// Layouts
import Layout from "./components/index";

// Individual pages
import HabitList from "./components/habits/HabitList.jsx";
import HabitTree from "./components/vis/HabitTree.jsx";
import RadialTree from "./components/vis/RadialTree.jsx";

// Components
import MainStage from "./components/layout/MainStage.jsx";

import * as d3 from "d3";

let pageMaker = function (mainView) {
  let page = { 
    view: () => m(MainStage, { render: mainView })
  };

  if(mainView.type === 'vis'){
    const divId = "svg_container_" + Math.floor(Math.random() * 1000000000) + 1;

    page.oncreate = function () { 
      mainView.content(d3.select("div#" + divId)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
      );
    };

    let d3Canvas = m("div", { id: divId });

    page.view = () =>  m(MainStage, { render: m(mainView, d3Canvas) });
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