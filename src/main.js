import client from "./client/client.js";

client.get_all().then(function (response) {
  console.log(m);
});

// //our app's namespace
// var chain = {};

// chain.view = function (ctrl) {
//   return m(
//     "table",
//     chain.seven(function () {
//       return m(
//         "tr",
//         chain.seven(function () {
//           return m("td", [m("input[type=checkbox]")]);
//         })
//       );
//     })
//   );
// };

// //create a helper utility that we can use in the view
// chain.seven = function (subject) {
//   var output = [];
//   for (var i = 0; i < 7; i++) output.push(subject(i));
//   return output;
// };

var list = require("./views/nodeList");

m.mount(document.body, list);
//render it
// m.mount(document.body, { controller: function () {}, view: chain.view });
