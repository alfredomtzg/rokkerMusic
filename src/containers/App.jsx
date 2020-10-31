import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import {PlaylistItem} from "../components/PlaylistItem/index";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PlaylistItem />
    </div>
  );
}

export default App;
