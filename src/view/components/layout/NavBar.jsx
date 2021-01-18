// src/view/components/layout/NavBar.jsx

// Layouts
import HabitView from "./HabitView.jsx";

// Components
// import NavListButton from "../ui/NavListButton.jsx";
// import RegularLink from "../ui/RegularLink.jsx";
import ToggleableLink from "../ui/subnav/ToggleableLink.jsx";
import HoverableLink from "../ui/subnav/HoverableLink.jsx";

const NavBar = {
  view: ({attrs, children}) => (
    <nav class="relative">
      <div class="container mx-auto flex justify-between">
        <div class="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Habit Data:</div>
        <ul class="flex">
          {
            attrs.routes.map(route => { 
              return (
                <HoverableLink
                  label={`${route.label}`}
                  id={`nav-${route.label}`}
                  href={`${route.url}`} >
                    <HabitView />
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