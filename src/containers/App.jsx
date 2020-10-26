import React, { useContext } from "react";
import { GlobalStyle } from "../components/styles/globals";
import { Context } from "../utils/Context";

function App() {
  const { name } = useContext(Context);
  return (
    <div className="App">
      <GlobalStyle />
      <h1> {name} </h1>
    </div>
  );
}

export default App;
