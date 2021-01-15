// src/view/components/layouts/App.jsx

import NavBar from "./NavBar.jsx";
import HabitView from "./habit-layout/HabitView.jsx";

const App = {
  view: ({attrs}) => (
    <div class="container">
      <NavBar routes={attrs.routes}></NavBar>
      <HabitView></HabitView>
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