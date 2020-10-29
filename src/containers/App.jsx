import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import ButtonAddToQueue from '../components/Modals/AddToQueue/index'
import ButtonSeeAP from '../components/Modals/SeeArtistProfile/index'
import ButtonAddToPlaylist from '../components/Modals/AddToPlaylist/index'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ButtonAddToPlaylist/>
      <ButtonAddToQueue/>
    </div>
  );
}

export default App;
