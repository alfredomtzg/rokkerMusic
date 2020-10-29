import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import ButtonAddToQueue from '../components/Modals/AddToQueue/index'
import ButtonSeeArtistProfile from '../components/Modals/SeeArtistProfile/index'
import ButtonAddToPlaylist from '../components/Modals/AddToPlaylist/index'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ButtonAddToPlaylist/>
      <ButtonAddToQueue/>
      <ButtonSeeArtistProfile/>
    </div>
  );
}

export default App;
