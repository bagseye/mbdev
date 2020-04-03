import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import "typeface-jura"

const GlobalStyle = createGlobalStyle`
:root {
  --background: #1d1d1d;
  --border: #313131;
  --primary: #FFB800;
  --inActive: #505050;
  --menuItem: 0.875rem;
  --transition: 0.3s;
  --h1: 1rem;
  --h2: 0.875rem;
  --paddingBorder: 1.875rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;

  @media(min-width:768px) {
    --h1: 1.25rem;
    --h2: 1.1rem;
    --paddingStd: 4.688rem;
    --paddingLarge: 7.813rem;
  }

  @media(min-width: 1200px) {
    /* --menuItem: 1.25rem; */
    --h1: 1.5rem;
    --h2: 1.25rem;
    --paddingStd: 5.625rem;
    --paddingLarge: 9.375rem;
  }
}
* {
  box-sizing: border-box;

}  
body {
    font-family: 'Jura', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: #fff;
  }

h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.25em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 500;
  letter-spacing: 1px;

  @media(min-width: 1200px) {
    margin-bottom: 1.5rem;
  }
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--h1);
}

h2 {
  font-size: var(--h2);
}

a.btn,
button.btn {
    color: #fff;
    background-color: transparent;
    font-family: 'Jura', sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    text-transform: uppercase;
    font-size: var(--menuItem);
    font-weight: 300;
    letter-spacing: 1.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      left: 0;
      right: 0;
      bottom: 4px;
      background-color: var(--primary);
      opacity: 0.35;
      transition: opacity 0.5s;
    }

    &:focus {
      color: var(--primary);
    }

    @media(hover: hover) {
      &:hover {
      cursor: pointer;

      &::after {
        opacity: 1;
      }
      }
    }
  }

  @media (min-width: 1200px) {
      font-size: var(--menuItem);
    }

  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .section-padding {
    padding: var(--paddingStd) var(--paddingBorder);
  }
  
  .section-padding--large {
    padding: var(--paddingLarge) var(--paddingBorder);
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
