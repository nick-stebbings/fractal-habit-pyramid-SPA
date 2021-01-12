// src/view/components/ui/ToggleableLink.jsx

import MenuList from "../ui/MenuList.jsx";

const ToggleableLink = {
  view: ({ attrs }) => (
    <li class="toggleable">
      <input type="checkbox" value="selected" id={`toggle-${attrs.id}`} class="toggle-input" />
      <label for={`toggle-${attrs.id}`} class="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
        { attrs.label }
      </label>
      <div role="toggle" class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
        <MenuList></MenuList>
      </div>
    </li>
  )
};

export default ToggleableLink;