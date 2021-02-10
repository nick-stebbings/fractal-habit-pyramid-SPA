// src/view/components/ui/ListCard.jsx

// Components
import Icon from "./Icon.jsx"

const ListCard = {
  view: ({ attrs }) => (
    <div class="list-card-container">
      <h3 class="font-bold text-xl text-black-100 text-bold mb-2">{ "This is a Test Habit" }</h3>
      <span class="flex justify-end py-3 text-black">
        <Icon id={ attrs.icon } />
      </span>
      <p class="text-gray-100 text-sm">{ attrs.subtitle }</p>
        <svg class="h-6 pr-3 fill-current text-pastel-hover"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
        </svg>
        <a href={ attrs.url } class="text-gray-100 bold border-b-2 border-pastel-hover hover:text-pastel-hover">Find out more...</a>
    </div>
  )
};

export default ListCard;