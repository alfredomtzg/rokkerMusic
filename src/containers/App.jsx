import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import PlaylistList from "../pages/PlaylistsList";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PlaylistList />
    </div>
  );
}

export default App;
