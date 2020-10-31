import React from "react";
import { GlobalStyle } from "../components/styles/globals";
/* import Routes from "../routes";
 */
 import ModalDotted from '../components/Modals/ModalDottedMenú/index'
 import ModalAddTQ from '../components/Modals/ModalAddToQueue-Playlist/index'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
    {/*   <Routes /> */}
      <ModalDotted/>
      <h5>rt</h5>
      <ModalAddTQ/>
    
    </div>
  );
}

export default App;
