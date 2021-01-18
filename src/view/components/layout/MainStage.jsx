// src/view/components/layout/MainStage.jsx

import NavBar from "./NavBar.jsx";
import BlockSection from "./BlockSection.jsx";

const MainStage = {
  view: ({attrs}) => (
    <main class="mx-auto">
      <NavBar routes={attrs.routes}></NavBar>
      <BlockSection selected={attrs.selectedSection}></BlockSection>
    </main>
  )
};

export default MainStage;


// App
//  - <MainNav></MainNav>
//  - <MainStage></Main>
//  //  - NavBar
//  //  - Section
//  //  //  - Blocks
//  //  //  - Blocks
//  //  //  - Blocks
//  //  //  - Blocks

//  - <Footer></Footer>
