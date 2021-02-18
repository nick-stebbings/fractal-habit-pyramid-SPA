// src/view/components/ui/Icon.jsx

const Icon = {
  view: ({ attrs }) => m('img', { src: "data:image/svg+xml;utf8," + attrs.string})
};

export default Icon;