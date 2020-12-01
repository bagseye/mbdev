import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Grid from '../Grid';

const Container = styled(motion.div)`
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
    }
  }

  @media (min-width: 768px) {
    h1 {
      grid-column: 1 / 5;
    }
  }
`;

const Banner = ({ description, secondary }) => (
  <Container
    initial={{ opacity: 0, y: 15 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ ease: 'easeOut', duration: 1.35, delay: 0.75 }}
  >
    <Grid>
      <h1>
        {description}
        {secondary ? <span>{secondary}</span> : null}
      </h1>
    </Grid>
  </Container>
);

export default Banner;
