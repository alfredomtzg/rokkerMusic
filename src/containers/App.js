import React from 'react'
import Login from '../components/Login';
import { GlobalStyle } from "../components/styles/globals";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Music App</h1>
      <Login></Login>
    </div>
  );
}

export default App;
