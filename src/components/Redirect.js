import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";

const RedirectStyles = styled.div`
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

const Redirect = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <GlobalStyles />
      <RedirectStyles>
        <div>
          <h1>Redirecting to login...</h1>
        </div>
      </RedirectStyles>
    </>
  );
};

export default Redirect;
