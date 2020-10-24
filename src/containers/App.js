import React from "react";
import { GlobalStyle } from "../components/styles/globals";
import {SendButton,ChangePassButton,SingOutButton,SaveButton,PlayButton} from '../components/Buttons/index'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SendButton/>
      <ChangePassButton/>
      <SingOutButton/>
      <SaveButton/>
      <PlayButton/>
      <h1>Music App</h1>
    </div>
  );
}

export default App;
