import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import MenuButton from './Header/MenuButton';
import Footer from './Footer';
import 'typeface-inter';
import Header from './Header/Header';
import { FadeWrapper } from './FadeWrapper';

const GlobalStyle = createGlobalStyle`
:root {
  --background: #171717;
  --charcoal: #111;
  --border: #313131;
  --primary: #fff;
  --inActive: #505050;
  --menuItem: 0.875rem;
  --transition: 0.3s;
  --h1: 1.5rem;
  --h1Large: 2.5rem;
  --h2: 1.2rem;
  --h3: 1.05rem;
  --para: 0.85rem;
  --paddingBorder: 1.875rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;
  --sansSerif: 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  --spacing: 1rem;
  /* --hero: 1.65rem; */
  --hero: 6.5vw;
  --button: 1.15rem;
  --logo: 1.1rem;



  --titleLarge: 30px;
  --titleLargeLineHeight: 36px;
  --titleLargeLetterSpacing: -2px;
  --paragraph: 14px;
  --paragraphLineHeight: 1.4;
  --gridGap: 15px;
  --margins: 80px;
  --borderLarge: 5px;
  --borderSmall: 2px;

  @media(min-width:414px) {
    --gridGap: 20px;
    --margins: 80px;
  }

  @media(min-width:768px) {
    --h1: 2rem;
    --h1Large: 3.25rem;
    --h2: 1.35rem;
    --h3: 1.2rem;
    --para: 1rem;
    --paddingStd: 4.688rem;
    --paddingLarge: 7.813rem;
    --hero: 4.5vw;
    --button: 1.35rem;
    --logo: 1.25rem;
  }

  @media(min-width: 834px) {
    --titleLarge: 42px;
    --titleLargeLineHeight: 50px;
    --paragraph: 16px;
    --gridGap: 30px;
    --margins: 120px;
    /* --borderLarge: 9px; */
  }

  @media(min-width: 1200px) {
    /* --menuItem: 1.25rem; */
    --h1: 2.15rem;
    --h1Large: 3.75rem;
    --h2: 1.65rem;
    --paddingStd: 5.625rem;
    --paddingLarge: 9.375rem;
    --hero: 3.25rem;
    --button: 1.6rem;
    --logo: 1.35rem;
  }

  @media(min-width: 1600px) {
    --titleLarge: 50px;
    --titleLargeLineHeight: 56px;
    --paragraph: 20px;
    --gridGap: 40px;
    --margins: 150px;
    --borderLarge: 6px;
  }
}
* {
  box-sizing: border-box;

}  
body {
    overflow-x: hidden;
    font-family: var(--sansSerif);
    font-weight: 400;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background);
    color: #fff;
    font-size: 16px;
    line-height: 1.4em;
  }

#main {
  transition: margin-left 0.5s ease;
  width: 100%;
  padding-top: 80px;
}


h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.3;
  font-weight: 500;
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
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="morgan-baker-google-analytics"
      >
        This site uses cookies
      </CookieConsent>
      <FadeWrapper>
        <div id="main" style={{ marginLeft: isOpen ? '100vw' : '0' }}>
          <Header status={isOpen}>
            <button type="button" onClick={toggleNav}>
              <MenuButton status={isOpen} />
            </button>
          </Header>
          {children}
          <Footer />
        </div>
      </FadeWrapper>
    </>
  );
};

export default Layout;
