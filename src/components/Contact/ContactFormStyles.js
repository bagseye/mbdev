import styled from "styled-components";

export const ContactFormStyles = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  label {
    flex: 0 0 100%;
    font-size: var(--leadIn);
    margin-bottom: calc(var(--gridGap) / 2);
    visibility: hidden;
    height: 0;
  }

  input {
    flex: 0 0 100%;
    padding: 10px 0;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    letter-spacing: var(--titleLargeLetterSpacing);
    font-weight: 700;
  }

  textarea {
    flex: 0 0 100%;
    min-height: 300px;
    padding: 10px 0;
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    letter-spacing: var(--titleLargeLetterSpacing);
    font-weight: 700;
    font-family: var(--sansSerif);
  }

  .area {
    display: flex;
    flex-wrap: wrap;
    margin: var(--gridGap) 0;
  }
`;
