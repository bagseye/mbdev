import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
      font-size: 16px;
        --background: #1c1b1b;
        --primary: #fff;
        --secondary: #6f6f6f;
        --highlight: #808080;
        --accent: rgb(142, 45, 226);
        --accentHover: rgba(142,45,226, 0.25);
        --titleLarge: 1.75rem;
        --titleLargeLineHeight: 1.45;
        --titleLargeLetterSpacing: -2px;
        --h2: 1.3rem;
        --h2LineHeight: 1.25;
        --h2LetterSpacing: -0.05rem;
        --paragraph: 1rem;
        --leadIn: 1.2rem;
        --btn: 1rem;
        --maxContainer: 1500px;
        --margins: 80px;
        --gridGap: 15px;
        --sectionGap: calc(var(--gridGap) * 4);
        --boxShadow: 0px 8px 15px 6px rgba(0, 0, 0, 0.2);
        

        --sansSerif: 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        
        @media(min-width:414px) {
            --titleLarge: 2.1rem;
            --h2: 1.35rem;
            --h2LineHeight: 1.35;
            --paragraph: 1.05rem;
            --leadIn: 1.25rem;
            --gridGap: 20px;
            --margins: 100px;
            --titleLargeLineHeight: 1.35;
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
          --leadIn: 1.35rem;
          --gridGap: 30px;
        }

        @media(min-width: 1600px) {
          --titleLarge: 3rem;
          --margins: 225px;
          --h2: 1.6rem;
          --h2LineHeight: 1.45;
          --gridGap: 40px;
          --leadIn: 1.45rem;
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
      min-height: 100vh;
      letter-spacing: -0.05em;
    }

    #main {
      width: 100%;
    }


    h1,
    h2 {
      font-weight: 700;
      margin-top: 0.25rem;

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

    h1,
    .as__h1 {
      font-size: var(--titleLarge);
      line-height: var(--titleLargeLineHeight);
      letter-spacing: var(--titleLargeLetterSpacing);
    }

    h2 {
      font-size: var(--h2);
      line-height: 1.35;
    }

    h4 {
      font-weight: 500;
      color: #888;
      line-height: 1.4;
      font-size: var(--paragraph);
    }

    p {
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.4;
      font-size: var(--paragraph);
    }

    .leadin {
      font-size: var(--leadIn);
      font-weight: 500;
    }

    p,
    button {
      font-family: var(--sansSerif);
    }

    hr {
      border: none;
      height: 1px;
      background-color: rgba(255,255,255,0.1);
      max-width: var(--maxContainer);
    }

    code {
      font-family: monospace;
      background-color: #525252;
      font-size: 14px;
      padding: 1px 4px;
      border-radius: 4px;
      font-weight: 400;

      @media(min-width:768px) {
        font-size: 15px;
      }

      @media(min-width:1024px) {
        font-size: 16px;
      }
    }

    .underline {
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-color: rgba(255, 255, 255, 1);
      text-decoration-thickness: 0.125rem;
    }

    a {
      font-weight: 400;
      text-underline-position: under;
      text-decoration-color: rgba(255, 255, 255, .2);
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
      border: 1px solid var(--primary);
      font-size: var(--btn);
      padding: 10px 14px;
      display: inline-block;
      text-decoration: none;
      transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
      color: var(--background);
      border-radius: 3px;

      @media(min-width: 600px) {
        padding: 15px 20px;
      }

      &:hover,
      &:focus {
        color: #fff;
        background-color: rgba(255,255,255, 0.15);
      }

      &__inverse {
        color: var(--primary);
        background-color: transparent;

        &:hover {
          background-color: rgba(255,255,255, 0.15);
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

    .content__area {
      max-width: 500px;

      @media (min-width: 768px) {
        max-width: 750px;
      }

      > * {
        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .container-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 0 var(--gridGap);
      width: 100%;
    }

    .section {
      padding-left: var(--gridGap);
      padding-right: var(--gridGap);
    }

    .sectiongap {
      margin-top: var(--sectionGap);
      margin-bottom: var(--sectionGap);
    }

    .paddinggap {
      padding-top: var(--sectionGap);
      padding-bottom: var(--sectionGap);
    }

    .topgap {
      padding-top: 150px;

      @media (min-width: 768px) {
        padding-top: 180px;
      }
    }

    .contentimg {
      margin-top: var(--gridGap);
      margin-bottom: var(--gridGap);
    }

    .columns {
      display: flex;
      flex-direction: column;
      gap: var(--gridGap);

      @media(min-width: 768px) {
        flex-direction: row;
      }

      .column {
        flex: 1 1 50%;

      > * {
        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
      }
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
