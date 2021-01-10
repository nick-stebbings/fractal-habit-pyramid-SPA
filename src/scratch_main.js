const client = require('./client/client');
const routes = require('./routes');
console.log(routes);
let hht = {};

//models
let hhtHabitNode = {
  show: client.show_one_node,
  load: HabitNodes.list,
  save: client.create_node,
  update: client.update_node,
  delete: client.delete_node,
}

hhtHabitDate = {
  localStorage: [],
  habitDate.today = function () {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  },
  habitDate.resetDate = function () {
    return localStorage["habitDate-app.start-date"] = habitDate.today().getTime();
  },
  habitDate.startDate = function () {
    return new Date(parseInt(localStorage["habitDate-app.start-date"] || habitDate.resetDate()));
  },
  habitDate.dateAt = function (index) {
    var date = new Date(habitDate.startDate());
    date.setDate(date.getDate() + index);
    return date;
  }
}

//controller
hhtHabitNode.controller = function () {
  var list = hhtHabitNode.load();

  this.isChecked = function (index) {
    return list[index]
  };
  // this.check = function (index, status) {
  //   if (hhtHabitNode.dateAt(index).getTime() <= hhtHabitNode.today().getTime()) {
  //     list[index] = status;
  //     hhtHabitNode.save(list);
  //   }
  // };
};



view
hht.view = function (ctrl) {
  return m("table", hht.seven(function (y) {
    return m("tr", hht.seven(function (x) {
      var index = hht.indexAt(x, y)
      return m("td", hht.highlights(index), [
        m("input[type=checkbox]", hht.checks(ctrl, index))
      ]);
    }));
  }));
};

hht.seven = function (subject) {
  var output = [];
  for (var i = 0; i < 7; i++) output.push(subject(i));
  return output;
};

hht.checks = function (ctrl, index) {
  return {
    onclick: function () {
      ctrl.check(index, this.checked);
    },
    checked: ctrl.isChecked(index)
  };
};

hht.highlights = function (index) {
  return {
    style: {
      background: hht.dateAt(index).getTime() == hht.today().getTime() ? "silver" : ""
    }
  };
};

hht.indexAt = function (x, y) {
  return y * 7 + x;
}

// m.mount(document.body, hht);
m.route(document.body, "/list", routes); 