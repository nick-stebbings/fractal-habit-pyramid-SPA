
export default function () {
  return {
    view() {
      return m('div', [
          m('h2', 'Congratulations, you made it!'),
          m('p', 'You\'ve spun up your very first Mithril app :-)'),
          // m(SampleComponent),
      ]);
    },
  };
}
