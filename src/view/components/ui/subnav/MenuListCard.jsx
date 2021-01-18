// src/view/components/ui/subnav/MenuListCard.jsx

const MenuListCard = {
  view: ({ attrs }) => (
    <div class="mb-8 px-4 lg:w-1/3 md:w-1/2">
      <div>
        <h3 class="font-bold text-xl text-gray-100 text-bold mb-2">{ attrs.title }</h3>
      </div>
      <p class="text-gray-100 text-sm">{ attrs.subtitle }</p>
      <div class="flex justify-end py-3">
        <svg class="h-8 mb-3 mr-3 fill-current justify-self-start text-gray-100"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
        </svg>
        <svg class="h-6 pr-3 fill-current text-pastel-hover"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
        </svg>
        <a href={ attrs.url } class="text-gray-100 bold border-b-2 border-pastel-hover hover:text-pastel-hover">Find out more...</a>
      </div>
    </div>
  )
};

export default MenuListCard;