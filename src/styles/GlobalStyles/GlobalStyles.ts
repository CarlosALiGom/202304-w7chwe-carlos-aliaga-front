import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Bitter', serif;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border-style: none;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyle;
