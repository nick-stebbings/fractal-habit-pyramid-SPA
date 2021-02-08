const habitRoutes = [
  {
    label: "Objectives",
    hrefs: {
      "/obj/list": {
        title: "List Objectives",
        description: "A flat list of all objectives for your perusal.",
        icon: "fa-tree",
      },
      "/obj/new": {
        title: "Add Objective",
        description: "Create a completely blank objective.",
        icon: "fa-tree",
      },
      "/obj/edit": {
        title: "Link Habits",
        description:
          "Link existing behaviors to a new objective, or move habits from one objective to the other.",
        icon: "fa-tree",
      },
    },
  },
  {
    label: "Habits",
    hrefs: {
      "/vis/habit-tree": {
        title: "Habit Tree",
        description:
          "Traditional hierarchical Tree diagram showing habit nodes.",
      },
      "/vis/habit-triangle": {
        title: "Habit Triangle",
        description:
          "Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.",
      },
      "/vis/date-lines": {
        title: "Date Comparison",
        description:
          "See how your different habits have overlapped over time using this line diagram.",
      },
      "/vis/radial-tree": {
        name: "Radial Tree",
        description:
          "A pretty hierarchical tree diagram where your habits branch off from the centre of a circle.",
      },
    },
  },
  {
    label: "Visualise",
    hrefs: {
      "/vis/habit-tree": {
        title: "Habit Tree",
        description:
          "Traditional hierarchical Tree diagram showing habit nodes.",
        icon: "fa-tree",
      },
      "/vis/habit-triangle": {
        title: "Habit Triangle",
        description:
          "Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.",
        icon: "fa-caret-up",
      },
      "/vis/date-lines": {
        title: "Date Comparison",
        description:
          "See how your different habits have overlapped over time using this line diagram.",
        icon: "fa-line-chart",
      },
      "/vis/radial-tree": {
        title: "Radial Tree",
        description:
          "A pretty hierarchical tree diagram where your habits branch off from the centre of a circle.",
        icon: "fa-pagelines",
      },
    },
  },
];
habitRoutes['selected'] = "Objectives";

export default habitRoutes;