import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
    background-color: #1D1C64;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

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

  input {
    font-family: inherit;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
