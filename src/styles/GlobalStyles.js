import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
      font-size: 16px;
        --background: #1c1b1b;
        --primary: #fff;
        --secondary: #6f6f6f;
        --highlight: #808080;
        --titleLarge: 1.75rem;
        --titleLargeLineHeight: 1.2;
        --titleLargeLetterSpacing: -2px;
        --h2: 1.3rem;
        --h2LineHeight: 1.25;
        --h2LetterSpacing: -0.15rem;
        --paragraph: 1rem;
        --leadIn: 1.15rem;
        --btn: 1rem;
        --maxContainer: 1500px;
        --margins: 80px;
        --gridGap: 15px;
        

        --sansSerif: 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        --serif: 'Cormorant', serif;
        
        @media(min-width:414px) {
            --titleLarge: 2.1rem;
            --h2: 1.35rem;
            --h2LineHeight: 1.35;
            --paragraph: 1.05rem;
            --leadIn: 1.2rem;
            --gridGap: 20px;
            --margins: 100px;
            --titleLargeLineHeight: 1.25;
        }

        @media(min-width:768px) {
            --titleLarge: 2.3rem;
            --h2: 1.4rem;
        }

        @media(min-width: 834px) {
          --titleLarge: 2.4rem;
          --margins: 150px;
          --titleLargeLineHeight: 1.3;
          --h2: 1.45rem;
          --gridGap: 30px;
        }

        @media(min-width: 1600px) {
          --titleLarge: 3rem;
          --margins: 225px;
          --titleLargeLineHeight: 1.35;
          --h2: 1.6rem;
          --h2LineHeight: 1.45;
          --gridGap: 40px;
          --leadIn: 1.3rem;
          --paragraph: 1.15rem;
        }
    }

    
    * {
      box-sizing: border-box;
    } 

    body {
      overflow-x: hidden;
      font-family: var(--sansSerif);
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: var(--background);
      color: var(--primary);
      /* font-size: 16px; */
      min-height: 100vh;
      letter-spacing: -0.05em;
    }

    #main {
      width: 100%;
      /* padding-top: 80px; */
    }


    h1,
    h2 {
      font-weight: 700;

      @media(min-width: 1200px) {
        margin-bottom: 1.5rem;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(--sansSerif);
    }

    p {
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.4;
      font-size: var(--paragraph);
    }

    p,
    button {
      font-family: var(--sansSerif);
    }

    a {
      font-weight: 400;
      text-underline-position: under;
      text-decoration-color: rgba(255, 255, 255, 1);
      text-decoration-thickness: 0.125rem;
      transition: text-decoration-color 0.75s ease;
      color: #fff;

      &:hover {
        text-decoration-color: rgba(142, 45, 226, 1);
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
          font-size: 22px;
          color: #fff;
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

          .arrow__left {
            margin-right: 20px;
          }
        }
      }
    }


    a.btn,
    button.btn {
      cursor: pointer;
      background-color: var(--primary);
      border: 2px solid var(--primary);
      font-size: var(--btn);
      padding: 15px 20px;
      display: inline-block;
      text-decoration: none;
      transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
      color: var(--background);

      &:hover,
      &:focus {
        background-color: var(--secondary);
        border-color: var(--secondary);
      }

      &__inverse,
      &__inverse:hover,
      &__inverse:focus {
        background-color: transparent;
      }

      &__inverse {
        color: var(--primary);

        

        &:hover {
          border-color: var(--highlight);
          color: var(--highlight);
        }
      }

      &__white {
        background-color: #fff;
        border-color: #fff;
        color: var(--background);

        &:hover {
          background-color: transparent;
          color: #fff;
        }
      }
    }

    .container {
      width: 100%;
      max-width: 1500px;
      margin-left: auto;
      margin-right: auto;

      &__body {
        padding: calc(var(--gridGap) * 3) 0 0 0;
      }
    }

    .container-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 0 var(--gridGap);
      width: 100%;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }

    .section-padding {
      padding: var(--paddingStd) var(--paddingBorder);
    }
  
    .section-padding--large {
      padding: var(--paddingLarge) var(--paddingBorder);
    }

    .standard__images {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: var(--gridGap);
      margin-bottom: calc(var(--gridGap) * 2);

      @media(min-width: 600px) {
          gap: var(--gridGap);
      }
    }

    .standard__image {
      flex: 0 0 100%;

      @media(min-width: 600px) {
          flex: 0 0 calc(50% - calc(var(--gridGap) / 2));
      }
    }
`;

export const SplitContainerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin-left: auto;
  margin-right: auto;
  box-sizing: content-box;
`;

export const GalleryItem = styled.div`
  .feature {
    width: 100%;

    > div {
      padding-top: 0 !important;
    }

    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: calc((3 / 4) * 100%);
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
