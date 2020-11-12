import React from 'react';
import styled from 'styled-components';
import Grid from '../Grid';

const Container = styled.div`
  padding: var(--margins) var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    font-weight: 500;
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    grid-column: 1 / 7;

    span {
      color: #777;
      font-weight: 300;
      background-clip: text;
      background-image: linear-gradient(to left, #8e2de2, #4a00e0);
      -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 768px) {
    h1 {
      grid-column: 1 / 5;
    }
  }
`;

const TitleArea = styled.div`
  border-top: var(--borderLarge) solid #fff;
  padding-top: 20px;
`;

const Banner = ({ description, secondary }) => (
  <Container>
    <TitleArea>
      <Grid>
        <h1>
          {description}
          {secondary ? <span>{secondary}</span> : null}
          {/* I'm a front end developer from Inverness,{' '}
          <span>building React applications using GatsbyJS</span> */}
        </h1>
      </Grid>
    </TitleArea>
  </Container>
);

export default Banner;
