// src/view/components/layouts/App.jsx

import NavBar from "./NavBar.jsx";
import HabitView from "./habit-layout/HabitView.jsx";
// import NavBar from "./NavBar.jsx";

const App = {
  view: (vnode) => (
    <div class="App">
      {/* <HabitView>{console.log(vnode)}</HabitView> */}
      <NavBar />
      
    </div>
  )
};


export default App;

  //  |-- App
//  |   |   |-- RouteNav
//  |   |       |-- NavButton
//  |   |       |-- NavButton
//  |   |       |-- NavButton
//  |       |-- Resourcelayout
//  |             |-- Navbar
//  |   |            |-- PrevButton
//  |   |            |-- NavButton
//  |   |            |-- NextButton
//  |   |         |-- ResBanner
//  |   |         |  |-- ResTitle
//  |   |         |  |-- LogoutButton
//  |   |         |-- CardContainer
//  |   |         |   |-- ConferenceCard
//  |   |         |   |   |-- ConferenceField
//  |   |         |   |   |-- ConferenceField
//  |   |         |   |   |-- ConferenceField
//  |   |         |   |   |-- ConferenceField