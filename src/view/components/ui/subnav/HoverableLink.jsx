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
      <div class="mega-menu">
        <div class="inset">
          { <MenuList items={children}></MenuList> }
        </div>
      </div>
    </li>
  )
}

export default HoverableLink;