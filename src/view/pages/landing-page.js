

import App from "../components/layouts/App.jsx"

export default function () {
  return {
    view(vnode) {
      return (
        <App>{vnode.children}</App>
      );
    },
  };
}
