import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import ButtonAddToQueue from '../components/Modals/AddToQueue/index'
import ButtonSeeArtistProfile from '../components/Modals/SeeArtistProfile/index'
import ButtonAddToPlaylist from '../components/Modals/AddToPlaylist/index'
import ButtonAddRemove from '../components/Modals/Add-Remove/index'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ButtonAddToPlaylist/>
      <ButtonAddToQueue/>
      <ButtonSeeArtistProfile/>
      <ButtonAddRemove/>
    </div>
  );
}

export default App;
