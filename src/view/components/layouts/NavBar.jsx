// src/view/components/layouts/NavBar.jsx

import NavButton from "../ui/NavButton.jsx";
import RegularLink from "../ui/RegularLink.jsx";
import ToggleableLink from "../ui/ToggleableLink.jsx";
import MenuList from "../ui/MenuList.jsx";

const NavBar = {
  view: ({attrs}) => (
    <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
      <div class="container mx-auto flex justify-between">
        <div class="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>
        <ul class="flex">
          {
            attrs.routes.map(route => { 
              return (
              <ToggleableLink
                label={`${route.name}`}
                id={`nav-${route.name}`}
                content={
                  <MenuList></MenuList>
                }>
              </ToggleableLink>
            )})
          }
          <RegularLink href="/" content="hi"></RegularLink>
          <ToggleableLink id="anid" label="Toggle Me" content="Hello there"></ToggleableLink>
          <li><NavButton path={`/list`}icon={<i class="far fa-calendar-alt"></i>} /></li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;