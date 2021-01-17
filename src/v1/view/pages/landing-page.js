// src/view/components/pages/landing-page.jsx

import App from "../components/layouts/App.jsx"

export default {
    view: function({attrs}) {
      return (
        <App routes={attrs.routes}></App>
      );
    },
}