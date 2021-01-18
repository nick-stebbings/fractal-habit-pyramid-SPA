// src/view/components/ui/subnav/HoverableLink.jsx

import MenuList from "../../layout/MenuList.jsx";

const HoverableLink = {
  view: ({attrs, children}) => (
    <li class="hoverable hover:bg-blue-800 hover:text-white">
      <a 
        href={`${attrs.href}`}
        id={`${attrs.id}`}
        class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white"
      >
        { attrs.label }  
      </a>
      <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
        { <MenuList items={children}></MenuList> }
      </div>
    </li>
  )
}

export default HoverableLink;