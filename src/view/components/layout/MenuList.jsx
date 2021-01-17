// src/view/components/layout/MenuList.jsx

const MenuList = {
  view: ({ children }) => (
    <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
      <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
        <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
      </ul>
      <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
        <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
      </ul>
      <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
        <h3 class="font-bold text-xl text-white text-bold">Heading 3</h3>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
        <li>
          <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
        </li>
      </ul>
      <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
        <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
        <li class="pt-3">
          <img src="https://placehold.it/205x172" />
        </li>
      </ul>
    </div>
  )
};

export default MenuList;