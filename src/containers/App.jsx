import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import Home from "../pages/Home";
import SettingsSignOut from "../pages/SettingsSignOut";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SettingsSignOut />
    </div>
  );
}

export default App;
