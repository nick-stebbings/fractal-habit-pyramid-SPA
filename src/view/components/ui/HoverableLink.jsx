// src/view/components/ui/HoverableLink.jsx

import MenuListCards from "../ui/MenuListCards.jsx";

const HoverableLink = {
  view: ({ attrs }) => (
    <li class="hoverable hover:bg-blue-800 hover:text-white">
      <a 
        href={attrs.href}
        class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white">
        {attrs.label}
      </a>
      <MenuListCards />
    </li>
  )
};

export default HoverableLink;