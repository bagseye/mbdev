import styled from "styled-components";

export const ContactFormStyles = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  label {
    flex: 0 0 100%;
    font-size: var(--leadIn);
    margin-bottom: calc(var(--gridGap) / 2);
  }

  input {
    height: 60px;
    border: 1px solid rgba(0, 0, 0, 0.35);
    border-radius: 3px;
    flex: 0 0 100%;
    font-size: var(--leadIn);
    padding: 10px var(--gridGap);
    font-family: var(--serif);
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  textarea {
    flex: 0 0 100%;
    min-height: 300px;
    padding: 10px var(--gridGap);
    font-size: var(--leadIn);
    padding: 10px var(--gridGap);
    font-family: var(--serif);
    border: 1px solid rgba(0, 0, 0, 0.35);
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .area {
    display: flex;
    flex-wrap: wrap;
    margin: var(--gridGap) 0;
  }
`;
