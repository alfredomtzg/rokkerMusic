import React from "react";
import { GlobalStyle } from "../components/styles/globals";
/* import Routes from "../routes";
 */
import Modal from '../components/Modals/borrar/index'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
    {/*   <Routes /> */}
    <Modal/>
    </div>
  );
}

export default App;
