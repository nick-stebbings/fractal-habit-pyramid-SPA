// src/view/components/layout/MainStage.jsx

// Components
import NavSection from "./NavSection.jsx";
import CardSection from "./CardSection.jsx";
import HabitList from "../habits/HabitList.jsx";

const MainStage = {
  view: ({attrs}) => (
    <main class="w-full">
      <svg  id="logo" 
            class="fill-current h-8 w-8 ml-1 mt-2 text-balance fixed" 
            width="54" height="54" viewBox="0 0 54 54" 
            xmlns="http://www.w3.org/2000/svg">
        <path d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z"/>
      </svg>
      <header id="masthead" class="w-full h-full">
        <NavSection routes={attrs.routes}></NavSection>
      </header>
      <CardSection selected={attrs.selectedSection}></CardSection>
      <HabitList />
    </main>
  )
};

export default MainStage;


// App
//  - <MainStage></Main>
//  //  - NavSection
//        - <MainNav></MainNav>
//        - <MainNav></MainNav>
//        - <SubNav></SubNav>

//  //  - CardSection
//  //  //  - Blocks
//  //  //  - Blocks
//  //  //  - Blocks
//  //  //  - Blocks

//  - <Footer></Footer>
