import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
a{
   text-decoration:none;
   color: inherit;
}
body{
   background-color:white;
   height:100%;
   
}





`;

export default GlobalStyle;
