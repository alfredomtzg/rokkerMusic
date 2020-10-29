import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import ButtonAddTQ from '../components/Modals/AddToQueue/index'
import ButtonSeeAP from '../components/Modals/SeeArtistProfile/index'
import ButtonAddToPlaylist from '../components/Modals/AddToPlaylist/index'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ButtonAddToPlaylist/>
    
    </div>
  );
}

export default App;
