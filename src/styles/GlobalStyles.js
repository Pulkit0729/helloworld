import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
${'' /* @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap'); */}

html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: Titillium Web, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important; 
    overflow-x: hidden;
}

body{
  background:${({ theme }) => {
    return theme.id == 101 ? (`url('../feed.png'), linear-gradient(290.39deg, #000000 0%, #000000 100%)`) : theme.backgroundCol;
  }} ;
}

button {
  outline: none!important;
  border: none;
  background: 0 0;
}

ul, ol{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

p{
  margin: 0
}
* {
  box-sizing: border-box;
}

input{
        border:none;
        background: transparent;
     }
    
input:focus-visible{
    outline:none;
    }

.row{
  margin: 0;
}

a:hover{
  color: inherit;
}

::-webkit-scrollbar{
  width: 5px;
  /* background-color: green; */
}

//Classes

.primaryText{
  font-family: 'Titillium Web';
  font-style: normal;
  color: ${({ theme }) => theme.text.prTextCol};
  text-shadow: 0px 0px 8px ${({ theme})=> theme.text.prShadowCol};
}
.secondaryText{
  font-family: 'Titillium Web';
  font-style: normal;
  color: ${({ theme }) => theme.text.secTextCol};
  text-shadow: 0px 0px 8px ${({ theme})=> theme.text.secShadowCol};
}
.tertiaryText{
  font-family: 'Titillium Web';
  font-style: normal;
  color: ${({ theme }) => theme.text.terTextCol};
  text-shadow: 0px 0px 8px ${({ theme})=> theme.text.terShadowCol};
}
.linear-gradient{
  background:${({ theme }) => {
    return theme.id == 101 ? (`linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%,${theme.background.prGradientCol}  100%)`) : theme.prCol;
  }} ;
}
.light-bottom-border{
  box-shadow: inset 0px -0.2px 0px ${({ theme }) => theme.border.prBorderCol};
}

//Utilities Classes
.h-15{
  height:15%;
}
.t-5{
  top:44px;
}

.z-10{
  z-index: 10;
}
.pt-44{
  padding-top: 44px;
}
.capitalize{
  text-transform: uppercase;
}
.rounded-image{
  border-radius: 100%;
}

.hide-scrollbar::-webkit-scrollbar{
  display: none;
}
`