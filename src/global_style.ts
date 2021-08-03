import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
a{
   text-decoration:none;
   color: inherit;
}
body{
   background-color:#272829;
   height:100%;
   color: #f0eded;
   
}
`;

export default GlobalStyle;
