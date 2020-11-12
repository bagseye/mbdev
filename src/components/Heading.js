import React from 'react';
import styled from 'styled-components';

const HeadingStyles = styled.div`
  > h2 {
    margin: 0;
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    grid-column: 1 / 7;
    border-top: var(--borderLarge) solid #fff;
    padding-top: 20px;
    letter-spacing: -2px;

    span {
      color: #777;
      font-weight: 300;
      background-clip: text;
      background-image: linear-gradient(to left, #8e2de2, #4a00e0);
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Heading = ({ content, highlight }) => (
  <HeadingStyles>
    <h2>
      {content}
      {highlight ? <span>{highlight}</span> : null}
    </h2>
  </HeadingStyles>
);

export default Heading;
