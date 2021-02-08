// src/view/components/layout/NavBar.jsx

// Layouts
import HabitView from "./HabitView.jsx";

// Components
import ToggleableLink from "../ui/subnav/ToggleableLink.jsx";
import HoverableLink from "../ui/subnav/HoverableLink.jsx";

const NavSection = {
  oninit: (vnode) => {
    vnode.state.subnav = vnode.attrs.routes
  },
  view: (vnode) => (
    <div class="h-full">
      <nav x-data="{show:false}" class="h-12 flex items-center justify-between" style="background-color:#121428">
        <div class="flex items-center flex-shrink-0 text-white mr-6 ml-16">
          <span class="font-semibold text-xl tracking-tight">Hab</span>
          <span class="font-semibold text-xxl tracking-tight">/</span>
          <span class="font-semibold text-xl tracking-tight">Fraction</span>
        </div>
        <div class="w-full block flex-grow md:flex md:justify-end">
          <div class="mr-16">
            <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Home</a>
          <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Services</a>
          <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Products</a>
          </div>
        </div>
      </nav>
      <nav class="sub-nav">
        <div class="sub-nav-container">
          <div class="sub-nav-title">{vnode.attrs.routes.selected} Data:</div>
          <ul class="sub-nav-links">
            {
              vnode.attrs.routes.map((route, index) => { 
                return (
                  <HoverableLink
                  label={`${route.label}`}
                  class={`${vnode.attrs.routes.selected === route.label ? 'active' : 'inactive'}`}
                  id={`sub-nav-${route.label.toLowerCase()}`}
                  hrefs={`${route.hrefs}`} >
                    { vnode.state.subnav[index].hrefs }
                  </HoverableLink>
                )
              })
            }
            {/* <NavListButton path={`/list`}icon={<i class="far fa-calendar-alt"></i>} /> */}
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default NavSection;