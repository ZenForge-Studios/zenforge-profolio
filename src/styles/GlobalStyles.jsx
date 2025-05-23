//#region ------------------------ [ Biblioteca ] ------------------------;
import { createGlobalStyle } from "styled-components";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --blue: #484a4e; 
  }
  body {
    overflow-x: hidden;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    color: whitesmoke;
    /* Fondo con degradado y una elipse/círculo al final */
    background: 
      radial-gradient(ellipse at bottom center, rgba(59,130,246,0.25) 0%, transparent 70%),
      linear-gradient(180deg, #111827 70%, rgba(59,130,246,0.25) 500%);
  }
  main {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    align-self: center;
    flex-direction: column;
    min-height: 100vh;
  }
  .Hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 10;
    gap: 1rem;
    padding: 4rem 2rem 1rem 2rem;
    text-align: center;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
  }
  h2 {
    font-size: clamp(2rem, 5vw, 4rem);
  }
  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
  h4 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }
  p {
    font-size: clamp(.8rem, 1.8vw, 1.125rem);
  }
  
  a.only {
    background: linear-gradient(90deg, #68b8ee,  #3B82F6);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    &:focus, &:hover {
      background: linear-gradient(90deg, #68b8ee,  #3B82F6);
      background-clip: text;
      text-shadow: 0px 6px 18px 2px rgba(59, 130, 246, 0.18), 0px 6px 18px rgba(0, 0, 0, 0.15);
      filter: drop-shadow(0 0 6px #3B82F6) brightness(1.05);
    }
  }

  h1, h2, h3, h4 {
    font-weight: bold; 
    line-height: 1.25;
    background: linear-gradient(90deg, #68b8ee,  #3B82F6);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    &.sub {
      background: linear-gradient(90deg, #ffffff, #f0f0f0);
      background-clip: text;
    }

    a {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      transition: color 0.3s ease-in-out;
      &:focus, &:hover {
        background: linear-gradient(90deg, #68b8ee,  #3B82F6);
        background-clip: text;
        text-shadow: 0px 6px 18px 2px rgba(59, 130, 246, 0.18), 0px 6px 18px rgba(0, 0, 0, 0.15);
        filter: drop-shadow(0 0 6px #3B82F6) brightness(1.05);
      }
    }
  }
`;
//#endregion