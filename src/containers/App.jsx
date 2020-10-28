import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import FullscreenPlayerPage from "../pages/FullscreenPlayer";
// import Landing from "../pages/Landing";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Landing /> */}
      <FullscreenPlayerPage />
    </div>
  );
}

export default App;
