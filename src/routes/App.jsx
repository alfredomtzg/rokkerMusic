import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../components/styles/globals";
import Home from "../pages/Home/index";
import SignUpEntryData from "../pages/SignUpEntryData/index";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUpEntryData} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
