import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Raleway', sans-serif;
}

a,input,button,textarea {
    text-decoration:none;
    border:none;
    background: none;
    cursor: pointer;
    &:focus,&:active{
      outline: none
      
    }
  }
 `;
export default GlobalStyles;
