import styled from "styled-components";

export const ContactFormStyles = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #262626;
  padding: calc(var(--gridGap) * 2) var(--gridGap);
  border-radius: 10px;
  box-shadow: var(--boxShadow);

  > h2 {
    margin-top: 0;
  }

  label,
  input,
  textarea {
    flex: 0 0 100%;
    font-weight: 700;
    font-size: 16px;
  }

  label {
    /* margin-bottom: var(--gridGap); */
    margin-bottom: 10px;
  }

  input,
  textarea {
    padding: 4px 15px;
    /* background-color: transparent; */
    background-color: #545454;
    border: none;
    /* border-bottom: 3px solid rgba(255, 255, 255, 0.2); */
    color: #fff;
    /* font-size: var(--h2); */
    font-family: var(--sansSerif);
    line-height: var(--h2LineHeight);
    letter-spacing: var(--h2LetterSpacing);
    transition: border-bottom 0.3s;
    height: 50px;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      outline: none !important;
      border-bottom: 3px solid #fff;
    }

    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 400;
    }

    &:-moz-placeholder {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 400;
      opacity: 1;
    }

    &::-moz-placeholder {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 400;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 400;
    }

    &::-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 400;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 400;
    }
  }

  textarea {
    min-height: 300px;
  }

  .area {
    display: flex;
    flex-wrap: wrap;
    margin: var(--gridGap) 0;
  }
`;
