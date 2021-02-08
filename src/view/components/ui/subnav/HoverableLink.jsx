// src/view/components/ui/subnav/HoverableLink.jsx

import MenuList from "../../layout/MenuList.jsx";

const HoverableLink = {
  view: ({ attrs, children }) => (
    <li class="hoverable">
      <a 
        id={`${attrs.id}`}
        class={`${attrs.class}`}
      >
        { attrs.label }  
      </a>
      <div class="mega-menu">
        <div class="overlay w-full absolute"></div>
        <div class="inset">
          { <MenuList>{ children }</MenuList> }
        </div>
      </div>
    </li>
  )
}

export default HoverableLink;