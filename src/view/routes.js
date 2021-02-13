// Layouts
import Layout from "./components/index";

// Individual pages
import HabitList from "./components/habits/HabitList.jsx";
import HabitTree from "./components/vis/HabitTree.jsx";
import RadialTree from "./components/vis/RadialTree.jsx";

// Components
import MainStage from "./components/layout/MainStage.jsx";

import * as d3 from "d3";

let page = function (mainView) {
  return {
    oncreate: (vnode) => { 
      var xScale = d3.scaleLinear().domain([0, 10]).range([0, 40]);

      var xAxis = d3.axisBottom(xScale);
      d3.select(vnode.dom)
        .append("svg")
        .attr("width", 100)
        .attr("height", 100)
        .append("g")
        .attr("transform", "translate(10,10)")
        .call(xAxis);
    },
    view: () => {
      if(mainView.type === 'vis'){
        return m('div');
      } else {
        return m(MainStage, { page: mainView })
      }
    }
  };
};

const Routes = {
  "/habits/list": {
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

const DefaultRoute = "/habits/list";

export {
  Routes,
  DefaultRoute
};