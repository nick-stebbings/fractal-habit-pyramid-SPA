// src/view/components/MainStage.jsx

import NavBar from "./layout/NavBar.jsx";

const MainStage = {
  view: ({attrs}) => (
    <div class="container">
      <NavBar routes={attrs.routes}></NavBar>
    </div>
  )
};

export default MainStage;

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