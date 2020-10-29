import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import ButtonAddTQ from '../components/Modals/AddToQueue/index'
import ButtonSeeAP from '../components/Modals/SeeArtistProfile/index'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ButtonSeeAP/>
    </div>
  );
}

export default App;
