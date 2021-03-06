import { select } from "d3-selection";

const p = function(value) {
  console.log(value);
};

let pageMaker = function (layoutView, pageView) {
  let page = {
    view: () => m(layoutView, m(pageView)),
  };

  if (pageView.type === "vis") {
    // If we need D3 for the view...
    // Create a visualisation-containing div element with random ID
    const divId = "svg_container_" + Math.floor(Math.random() * 1000000000) + 1;
    page.view = () => {
      // Pass a selector to the vis component, representing the div element where D3 can mutate the DOM
      let d3Canvas = m("div", { id: divId });
      return m(layoutView, m(pageView, d3Canvas));
    };
    page.oncreate = function () {
      // Pass an appended SVG selection to the vis component to consume
      pageView.content(
        select("div#" + divId)
          .classed("h-full", true)
          .append("svg")
          .attr("width", "100%")
          .attr("height", "100%")
      );
    };
  }

  return page;
};

export {
  p,
  pageMaker
}