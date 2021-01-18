const habitRoutes = [
  {
    label: "Objectives",
    hrefs: {
      "/vis/habit-tree": {
        name: "Habit Tree",
        description:
          "Traditional hierarchical Tree diagram showing habit nodes.",
      },
      "/vis/habit-triangle": {
        name: "Habit Triangle",
        description:
          "Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.",
      },
      "/vis/date-lines": {
        name: "Date Comparison",
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
    label: "Habits",
    hrefs: {
      "/vis/habit-tree": {
        name: "Habit Tree",
        description:
          "Traditional hierarchical Tree diagram showing habit nodes.",
      },
      "/vis/habit-triangle": {
        name: "Habit Triangle",
        description:
          "Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.",
      },
      "/vis/date-lines": {
        name: "Date Comparison",
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
        title: "Radial Tree",
        description:
          "A pretty hierarchical tree diagram where your habits branch off from the centre of a circle.",
      },
    },
  },
];
habitRoutes['selected'] = "Objective";

export default habitRoutes;