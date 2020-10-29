import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import ModalAddToQueue from '../components/Modals/ModalAddToQueue-Playlist/index'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ModalAddToQueue/>
    </div>
  );
}

export default App;
