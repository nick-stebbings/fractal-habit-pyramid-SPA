// src/view/components/vis/HabitTree.jsx

// Model
import HabitNodes from "../../../models/index";

// import tidyTree from "./tidyTree";
import "./tree-style.scss";
import * as d3 from "d3";

const HabitTree = {
  type: 'vis',
  view: ({children}) => (
    <div id="vis" width="960" height="1000">{ children }</div>
  ),
  content(svg) {
    var width = +svg.attr("width"),
        height = +svg.attr("height"),
        g = svg.append("g").attr("transform", "translate(40,0)");

    var tree = d3.tree().size([height, width - 160]);
    var stratify = d3.stratify().parentId(function (d) {
      return d.name.substring(0, d.name.lastIndexOf("."));
    });

    let allNodes = HabitNodes.tree();
    allNodes.then(function (response) {
      let data = response.data;
      var root = d3.hierarchy((data));
      // var root = stratify(JSON.stringify(data)).sort(function (a, b) {
      //   return a.height - b.height || a.id.localeCompare(b.id);
      // });
console.log(root);
      var link = g
        .selectAll(".link")
        .data(tree(root).links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr(
          "d",
          d3
            .linkHorizontal()
            .x(function (d) {
              return d.y;
            })
            .y(function (d) {
              return d.x;
            })
        );

      var node = g
        .selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", function (d) {
          return "node" + (d.children ? " node--internal" : " node--leaf");
        })
        .attr("transform", function (d) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      node.append("circle").attr("r", 2.5);

      node
        .append("text")
        .attr("dy", 3)
        .attr("x", function (d) {
          return d.children ? -8 : 8;
        })
        .style("text-anchor", function (d) {
          return d.children ? "end" : "start";
        })
        .text(function (d) {
          return d.name.substring(d.name.lastIndexOf(".") + 1);
        });
    });

  },
};

export default HabitTree;