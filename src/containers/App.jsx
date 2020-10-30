import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import Routes from "../routes";
import Modal from "../components/Modal";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Modal />
    </div>
  );
}

export default App;
