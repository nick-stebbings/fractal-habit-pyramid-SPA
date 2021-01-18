// src/view/components/layout/MenuList.jsx

const MenuList = {
  view: ({ attrs }) => (
    <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
                    <div class="w-full text-white mb-8">
                      <h2 class="font-bold text-2xl">Main Hero Message for the menu section</h2>
                      <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                    </div>
                    {
                      m('div.habit-view', attrs.items)
                    }
    </div>
  )
};

export default MenuList;