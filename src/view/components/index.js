// src/view/index.js

import "./style.scss";

export default function () {
  return {
    view: (vnode) => m("#container", vnode.children),
  };
}
