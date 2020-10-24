import React from 'react'
import { GlobalStyle } from "../components/styles/globals";
import SearchResults from '../pages/SearchResults';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SearchResults></SearchResults>
    </div>
  );
}

export default App;
