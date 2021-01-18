// src/view/components/layout/MenuList.jsx

const MenuList = {
  view: ({ attrs }) => (
    <div class="container sub-menu">
      <div class="hero-message">
        <h2>Main Hero Message for the menu section</h2>
        <p>Sub-hero message, not too long and not too short. Make it just right!</p>
      </div>
      {
        m('div.habit-view', attrs.items)
      }
    </div>
  )
};

export default MenuList;