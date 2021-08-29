import React from "react";
import styled from "styled-components";
import { handleAuthentication } from "../utils/auth";
import { GlobalStyles } from "../styles/GlobalStyles";

const LoadingStyles = styled.div`
  padding: var(--gridGap);
  background-color: #1c1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    color: #fff;
  }
`;

const Callback = () => {
  handleAuthentication();

  return (
    <>
      <GlobalStyles />
      <LoadingStyles>
        <div>
          <h1>One moment please...</h1>
        </div>
      </LoadingStyles>
    </>
  );
};

export default Callback;
