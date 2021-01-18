// src/view/components/ui/subnav/HoverableLink.jsx

import MenuList from "../../layout/MenuList.jsx";

const HoverableLink = {
  view: ({attrs, children}) => (
    <li class="hoverable">
      <a 
        href={`${attrs.href}`}
        id={`${attrs.id}`}
        class="relative block"
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