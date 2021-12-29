import styled from "styled-components";

export const ContactFormStyles = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #262626;
  padding: calc(var(--gridGap) * 2) var(--gridGap);
  border-radius: 10px;
  box-shadow: 0px 8px 15px 6px rgba(0, 0, 0, 0.2);

  label,
  input,
  textarea {
    flex: 0 0 100%;
    font-weight: 700;
  }

  label {
    margin-bottom: var(--gridGap);
  }

  input,
  textarea {
    padding: 10px 0;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: var(--h2);
    font-family: var(--sansSerif);
    line-height: var(--h2LineHeight);
    letter-spacing: var(--h2LetterSpacing);
    transition: border-bottom 0.3s;

    &:focus {
      outline: none !important;
      border-bottom: 3px solid #fff;
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
