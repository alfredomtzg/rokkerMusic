import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  body {
    font-family: Helvetica;
    margin: 0;
    font-size: 10px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
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
`