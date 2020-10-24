import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import {GoogleButton,FacebookButton} from '../components/Buttons/index'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GoogleButton/>
      <h1>Music App</h1>
    </div>
  );
}

export default App;
