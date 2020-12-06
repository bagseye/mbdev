import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Grid from '../Grid';

const Container = styled(motion.div)`
  padding: var(--margins) var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  section {
    grid-column: 1 / 7;
  }

  .link__std {
    display: inline-block;
    margin-top: 50px;
  }

  h1 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    font-weight: 500;
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);

    span {
      color: #777;
      font-weight: 300;
    }
  }

  h1,
  h2 {
    grid-column: 1 / 7;
  }

  h2 {
    font-weight: 300;
    margin-bottom: 0;
    color: #777;
    font-size: var(--h2);
    letter-spacing: -1px;
  }

  @media (min-width: 768px) {
    section {
      grid-column: 1 / 5;
    }
  }
`;

const Banner = ({ description, secondary, excerpt, buttonText, jumpTo }) => (
  <Container
    initial={{ opacity: 0, y: 15 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ ease: 'easeOut', duration: 1.35, delay: 0.75 }}
  >
    <Grid>
      <section>
        <h1>
          {description}
          {secondary ? <span>{secondary}</span> : null}
        </h1>
        {excerpt && <h2>{excerpt}</h2>}
        {buttonText && (
          <a href={jumpTo} className="link__std">
            {buttonText}
          </a>
        )}
      </section>
    </Grid>
  </Container>
);

export default Banner;
