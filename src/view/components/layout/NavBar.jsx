// src/view/components/layout/NavBar.jsx

// Layouts
import HabitView from "./HabitView.jsx";

// Components
// import NavListButton from "../ui/NavListButton.jsx";
// import RegularLink from "../ui/RegularLink.jsx";
import ToggleableLink from "../ui/subnav/ToggleableLink.jsx";
import HoverableLink from "../ui/subnav/HoverableLink.jsx";

const NavBar = {
  oninit: (vnode) => {
    vnode.state.subnav = vnode.attrs.routes[2].hrefs
  },
  view: (vnode) => (
    <nav class="relative">
      <div class="container mx-auto flex justify-between">
        <div class="relative sub-nav-title">{vnode.attrs.routes.selected} Data:</div>
        <ul class="flex">
          {
            vnode.attrs.routes.map(route => { 
              return (
                <HoverableLink
                  label={`${route.label}`}
                  id={`nav-${route.label}`}
                  hrefs={`${route.hrefs}`} >
                    { vnode.state.subnav }
                  </HoverableLink>
              )
            })
          }
          {/* <NavListButton path={`/list`}icon={<i class="far fa-calendar-alt"></i>} /> */}
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;