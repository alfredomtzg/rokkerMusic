import React from "react";
import { GlobalStyle } from "../components/styles/globals";
/* import Routes from "../routes";
 */import ModalCard from '../components/Modal/index'
 
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Routes /> */}
      <ModalCard/>
    </div>
  );
}

export default App;
