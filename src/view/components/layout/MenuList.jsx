// src/view/components/layout/MenuList.jsx

import MenuListCard from "../ui/subnav/MenuListCard.jsx";

const MenuList = {
  view: ({ children }) => (
    <div class="mega-menu-container container">
      <div class="hero-message">
        <h2>Main Hero Message for the menu section</h2>
        <p>Sub-hero message, not too long and not too short. Make it just right!</p>
      </div>
      {
        // Map Subnav routes to their menu cards
        Object.keys(children[0]).map((route, index) =>
          <MenuListCard
            title={ children[0][route].title }
            id={ index }
            subtitle={ children[0][route].description }
            url={ route }
            icon={  children[0][route].icon }
          />
        )
      }
    </div>
  )
};

export default MenuList;