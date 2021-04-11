import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, helvetica, sans-serif;

  }
  h1{
    font-size: 4rem;
    margin-bottom: 50px;
  }
`;

export default GlobalStyle;
