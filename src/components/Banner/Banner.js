import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const BannerGridColumn = styled.section`
  grid-column: 1 / 7;

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const BannerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1580px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;

  h1 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;
  }
`;

const Banner = ({ heading }) => (
  <BannerStyles>
    <div className="container-grid">
      <BannerGridColumn>
        {heading ? (
          <>
            <h1>{heading}</h1>
          </>
        ) : (
          <>
            <h1>
              Bespoke web <span>design & development</span> in Inverness.
              Creating <span>modern, user-friendly</span> experiences using{" "}
              <span>Wordpress</span>.
            </h1>
          </>
        )}
      </BannerGridColumn>
    </div>
    <p>Scroll for recent projects</p>
  </BannerStyles>
);
export default Banner;
