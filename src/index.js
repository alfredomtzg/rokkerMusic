/* eslint-disable react/jsx-filename-extension */
import React from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { ContextProvider } from "./utils/Context";

const apiUrl = 'https://rokker-music-app-test.herokuapp.com/api';
// Intercepter de las petciones.
axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (!allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
      console.log(`----Petición interceptada ${config.url}`);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
