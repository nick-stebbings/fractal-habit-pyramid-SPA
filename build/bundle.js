'use strict';

//our app's namespace
var chain = {};

chain.view = function (ctrl) {
  return m(
    "table",
    chain.seven(function () {
      return m(
        "tr",
        chain.seven(function () {
          return m("td", [m("input[type=checkbox]")]);
        })
      );
    })
  );
};

//create a helper utility that we can use in the view
chain.seven = function (subject) {
  var output = [];
  for (var i = 0; i < 7; i++) output.push(subject(i));
  return output;
};

//render it
m.module(document.body, { controller: function () {}, view: chain.view });
