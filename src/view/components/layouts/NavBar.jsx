// src/view/components/layouts/NavBar.jsx

import NavButton from "../ui/NavButton.jsx";
import RegularLink from "../ui/RegularLink.jsx";
import ToggleableLink from "../ui/ToggleableLink.jsx";

const NavBar = {
  view: () => (
    <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
      <div class="container mx-auto flex justify-between">
        <div class="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>
        <ul class="flex">
          <RegularLink href="/" content="hi"></RegularLink>
          <RegularLink href="/" content="hi"></RegularLink>
          <ToggleableLink id="anid" label="Toggle Me" content="Hello there"></ToggleableLink>
          <li><NavButton path={`/list` }icon={<i class="far fa-calendar-alt"></i>} /></li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;