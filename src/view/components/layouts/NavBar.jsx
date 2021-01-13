// src/view/components/layouts/NavBar.jsx

import NavListButton from "../ui/NavListButton.jsx";
import RegularLink from "../ui/RegularLink.jsx";
import ToggleableLink from "../ui/ToggleableLink.jsx";
import HoverableLink from "../ui/HoverableLink.jsx";
import MenuList from "../ui/MenuList.jsx";

const NavBar = {
  view: ({attrs}) => (
    <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
      <div class="container mx-auto flex justify-between">
        <div class="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Habit Data: { attrs.date }</div>
        <ul class="flex">
          {
            attrs.routes.map(route => { 
              return (
              <HoverableLink
                label={`${route.name}`}
                id={`nav-${route.name}`}
                content={
                  <MenuList></MenuList>
                }
              />
            )})
          }
          <ToggleableLink
            label={`hi`}
            id={`nav-hi`}
            content={'i'}
          />
          <NavListButton path={`/list`}icon={<i class="far fa-calendar-alt"></i>} />
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;