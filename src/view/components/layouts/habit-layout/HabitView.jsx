// import nodeList from "../../../habit-node/
const nodeList = {
    view: ({ children }) => {
      return m(
        "ul",
        children.map(function (node) {
          return m("li", node.id);
        })
      );
    },
  };

const HabitView = (ctrl) => [
<nodeList>
		{
			ctrl.list
		}
	</nodeList>
];

// <StageBanner action={() => console.log(`Logging out!`)} title="Conferences" />,
// <CardContainer>
// 	{
// 		conferences
// 			.map((conference) => <ConferenceCard conference={conference} />)
// 	}
// </CardContainer>

export default HabitView;