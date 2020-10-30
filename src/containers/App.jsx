import React from "react";
import { GlobalStyle } from "../components/styles/globals";
/* import Routes from "../routes";
 */
 import ModalDottedMenu from '../components/Modals/ModalDottedMenú/index'
 

function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
       <ModalDottedMenu /> 
 {/*       <Routes />
 */}    </div>
  );
}

export default App;
