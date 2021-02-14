// src/view/components/vis/HabitTree.jsx

// Model
import HabitNodes from "../../../models/index";

import "./tree-style.scss";
import * as d3 from "d3";

const svgWidth = 960;
const svgHeight = 1000;

const HabitTree = {
  type: 'vis',
  view: ({children}) => (
    <div id="vis" width={svgWidth} height={svgWidth}>{ children }</div>
  ),
  content(svg) {
    let margin = {top: 20, right: 120, bottom: 20, left: 120},
        width = svgWidth - margin.right - margin.left,
        height = svgHeight - margin.top - margin.bottom;
    svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      
      let fetchTreeData = HabitNodes.tree();
      
      fetchTreeData.then(function (response) {
        const root = d3.hierarchy(response.data);
        const dy = width / 6;
        const dx = 10;
        const tree = d3.tree().nodeSize([dx, dy]);
        const diagonal = d3.svg.diagonal()

        let i = 0;
console.log(diagonal);
//         update(root);


      })
    }
  }



export default HabitTree;