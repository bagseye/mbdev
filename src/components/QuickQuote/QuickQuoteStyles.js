import styled from "styled-components";

export const QuickQuoteStyles = styled.section`
  background-color: rgba(0,0,0, 0.55);
  padding: var(--gridGap);
  backdrop-filter: blur(8px);
  width: 100%;
  box-shadow: 1px 15px 36px 0px rgba(0, 0, 0, 0.75);
  border-radius: 6px;
  flex-basis: 450px;
  max-width: 600px;

  @media(min-width:1280px) {
    flex-direction: row;
  }

  .area {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;

    label {
      font-size: var(--leadIn);
      font-weight: 700;
      margin-bottom: 5px;

      span {
        font-style: italic;
        font-size: var(--paragraph);
        color: var(--accent);
      }
    }

    input {
      height: 50px;
      background-color: rgba(255,255,255,0.35);
      border: none;
      padding: 0 calc(var(--gridGap) / 2);
      color: #fff;
      font-size: var(--leadIn);
      font-weight: 700;
      letter-spacing: -0.05em;
      // transition: border-bottom 0.3s;
      position: relative;
      border: 2px solid transparent;
      border-radius: 3px;
      transition: background-color 0.2s ease-in, border-color 0.2s ease-in;

      &:focus {
        outline: none !important;
        border-color: var(--accent);
        background-color: rgba(255,255,255,1);
        color: var(--background);
      }
  
      &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.55);
      }
  
      &:-moz-placeholder {
        color: rgba(255, 255, 255, 0.55);
        opacity: 1;
      }
  
      &::-moz-placeholder {
        color: rgba(255, 255, 255, 0.55);
        opacity: 1;
      }
  
      &:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.55);
      }
  
      &::-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.55);
      }
  
      &::placeholder {
        color: rgba(255, 255, 255, 0.55);
      }
    }
  }
`