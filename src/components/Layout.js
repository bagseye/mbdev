import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import MenuButton from "./Header/MenuButton";
import Footer from "./Footer";
import Header from "./Header/Header";
import MenuContext from "./MenuContext";
import "fontsource-inter";

const GlobalStyle = createGlobalStyle`
:root {
  --background: #171717;
  --border: #313131;
  --primary: #fff;
  --inActive: #505050;
  --menuItem: 0.875rem;


  --paddingBorder: 1.875rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;
  --sansSerif: 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  --spacing: 1rem;


  --charcoal: #777;
  --titleLarge: 30px;
  --titleLargeLineHeight: 40px;
  --titleLargeLetterSpacing: -2px;
  --h2: 22px;
  --paragraph: 14px;
  --menuBtn: 14px;
  --paragraphLineHeight: 1.4;
  --gridGap: 15px;
  --margins: 80px;
  --borderLarge: 5px;
  --borderSmall: 2px;

  @media(min-width:414px) {
    --gridGap: 20px;
    --margins: 100px;
  }

  @media(min-width:768px) {
    --menuBtn: 18px;
    
  }

  @media(min-width: 834px) {
    --titleLarge: 42px;
    --titleLargeLineHeight: 58px;
    --h2: 26px;
    --paragraph: 16px;
    --menuBtn: 20px;
    --gridGap: 30px;
    --margins: 150px;
  }

  @media(min-width: 1600px) {
    --titleLarge: 50px;
    --titleLargeLineHeight: 66px;
    --h2: 30px;
    --paragraph: 20px;
    --menuBtn: 22px;
    --gridGap: 40px;
    /* --margins: 175px; */
    --margins: 225px;
    --borderLarge: 6px;
  }
}
* {
  box-sizing: border-box;

}  
body {
    overflow-x: hidden;
    font-family: var(--sansSerif);
    font-weight: 300;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background);
    color: #fff;
    font-size: 16px;
    line-height: 1.4em;
    min-height: 100vh;
  }

#main {
  width: 100%;
  padding-top: 80px;
}


h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.3;
  /* font-weight: 500; */
  letter-spacing: -2px;

  @media(min-width: 1200px) {
    margin-bottom: 1.5rem;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
button {
  font-family: var(--sansSerif);
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--h1);
  letter-spacing: -0.25px;
}

h2 {
  font-size: var(--h2);
  line-height: 1.4;
}


a {
  color: #fff;
  font-weight: 400;
  text-decoration: underline #808080;
  transition: text-decoration-color 0.5s ease;


    &:hover {
      text-decoration: underline rgba(0,0,0,0);
    }


   &.link__std {
    font-size: var(--paragraph); 
    font-weight: 400;
    text-decoration: underline #808080;
    transition: text-decoration-color 0.5s ease;

    &:hover {
      text-decoration: underline rgba(0,0,0,0);
    }
  }

  &.link__arrow {
    font-size: var(--paragraph);
    display: flex;
    align-items: center;
    font-weight: 400;
    text-decoration: underline #808080;
    transition: text-decoration-color 0.5s ease;

    .arrow,
    .arrow__left { 
      color: #808080;
      font-size: 22px;
    }

    .arrow {
      margin-left: 10px;
      transition: color 0.5s ease, margin-left 0.5s ease;
    }

    .arrow__left {
      margin-right: 10px;
      transition: color 0.5s ease, margin-right 0.5s ease;
    }

    &:hover {
      text-decoration: underline rgba(0,0,0,0);

      .arrow {
        margin-left: 20px;
      }

      .arrow,
      .arrow__left {
        color: #2962ff;
      }

      .arrow__left {
        margin-right: 20px;
      }
    }

    
  }
}


a.btn,
button.btn {
    color: #fff;
    background-color: transparent;
    border: 0;
    padding: 0 0 10px 0;
    font-size: var(--button);
    font-family: var(--sansSerif);
    font-weight: 700;
    position: relative;
    align-self: flex-start;
    letter-spacing: -1px;
    text-underline-position: under;
    text-decoration-color: rgba(255, 255, 255, 0.35);
    transition: text-decoration-color 0.75s ease, color 0.75s ease;

    &:hover {
      cursor: pointer;
      text-decoration-color: rgba(255, 255, 255, 1);
    }

    &:focus {
      color: var(--primary);
    }
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
`;

const Layout = ({ children }) => {
  // Access state globally using context
  const [isOpen, setNav] = useContext(MenuContext);

  return (
    <>
      <GlobalStyle />
      <Header>
        <MenuButton />
      </Header>
      <div
        id="main"
        style={{
          transitionDuration: "0.75s",
          transitionDelay: !isOpen ? "1s" : null,
          opacity: isOpen ? 0 : 1,
        }}
      >
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
