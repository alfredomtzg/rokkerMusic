import { createGlobalStyle } from "styled-components";

export const Colors = {
  facebookInactive: "#1A77F2",
  facebookActive: "#005AD1",
  white: "#ffffff",
  R500: "#F51E38",
  R400: "#FF5A6E",
  B400: "#6A57F1",
  B500: "#3E2AD1",
  G100: "#FAFBFC",
  G200: "#F4F5F7",
  G400: "#B3BAC5",
  G700: "#091E42",
  G600: "#7a869a",
  S700: "#2E3A59",
  shadow: "3px 4px 9px 0px rgba(0, 0, 0, 0.15)",
};

export const GlobalStyle = createGlobalStyle`
  
  html {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    font-size: 10px;
    background-color: ${Colors.G100};
  }

  body{
    margin:0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin:0;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
  }
  span{
    font-family:'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;
