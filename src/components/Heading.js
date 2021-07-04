import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  margin: 0;
  font-size: var(--titleLarge);
  line-height: var(--titleLargeLineHeight);
  letter-spacing: var(--titleLargeLetterSpacing);
  margin-bottom: calc(var(--margins) / 2);
  color: var(--primary);

  span {
    color: var(--highlight);
  }
`;

const Heading = ({ content, highlight }) => (
  <HeadingStyles>
    {content}
    {highlight ? <span>{highlight}</span> : null}
  </HeadingStyles>
);

export default Heading;
