import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body #root {
    height: 100vh;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  body {
    background: #161616;
    font-family: 'Poppins', sans-serif;
    color: #6A6180;
  }
`;

export default GlobalStyle;