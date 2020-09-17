import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  
  :root {
    --bg-color: #fff;
    --color-blue: hsl(231, 69%, 60%);
    --color-red: hsl(0, 94%, 66%);
    --color-grey: hsl(229, 8%, 60%)
    --color-dark-blue: hsl(229, 31%, 21%)
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    
    font-family: 'Rubik', sans-serif;
    font-size: 62.5%;

    display: grid;
    place-items: center;
    background-color: var(--bg-color);
    
  }


`;