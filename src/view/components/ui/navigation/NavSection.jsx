// src/view/components/ui/navigation/NavSection.jsx

// import "./style.scss";

// Components
import Routes from "../../../subNavRoutes";
// import ToggleableLink from "../ui/subnav/ToggleableLink.jsx";
import NavBar from "./NavBar.jsx";
import RegularLink from "./RegularLink.jsx";

const NavSection = {
  oninit: (vnode) => {
    // vnode.state.subnav = Routes
  },
  view: (vnode) => (
    <header id="masthead">
      <nav x-data="{show:false}" class="main-nav h-12 bg-balance">
        <div class="flex items-center flex-shrink-0 text-white mr-6 ml-20 h-12">
          <span class="font-semibold text-xl tracking-tight">Hab/Fraction</span>
          <div class="w-full h-full block flex-grow">
            <div class="mr-16 h-full">
              <RegularLink path={"/tis"} content={"Domain:"}></RegularLink>
              <RegularLink path={"/tis"} content={"Date:"}></RegularLink>
            </div>
          </div>
      </div>
      </nav>
      <NavBar routes={Routes}></NavBar>
    </header>
  )
};

export default NavSection;