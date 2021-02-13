// src/view/components/layout/NavBar.jsx

// Components
import habitRoutes from "../../subNavRoutes";
// import ToggleableLink from "../ui/subnav/ToggleableLink.jsx";
import NavBar from "../ui/navigation/NavBar.jsx";

const NavSection = {
  oninit: (vnode) => {
    // vnode.state.subnav = habitRoutes
  },
  view: (vnode) => (
    <header id="masthead">
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
      <NavBar routes={habitRoutes}></NavBar>
    </header>
  )
};

export default NavSection;