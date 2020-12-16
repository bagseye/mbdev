import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Grid from "../Grid";

const BannerStyles = styled(motion.div)`
  padding: var(--margins) var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  section {
    grid-column: 1 / 7;
  }

  h1 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    font-weight: 500;
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
  }

  h1,
  h2 {
    grid-column: 1 / 7;
  }

  h2 {
    font-weight: 300;
    margin-bottom: 0;
    color: var(--charcoal);
    font-size: var(--h2);
    letter-spacing: -1px;
  }

  @media (min-width: 768px) {
    section {
      grid-column: 1 / 5;
    }
  }
`;

const Banner = ({ description, excerpt, children }) => (
  <BannerStyles>
    <Grid>
      <section>
        {description && (
          <h1>
            {[...description].map((item, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: i * 0.02 }}
              >
                {item}
              </motion.span>
            ))}
          </h1>
        )}
        {excerpt && (
          <h2>
            {[...excerpt].map((item, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: i * 0.02 }}
              >
                {item}
              </motion.span>
            ))}
          </h2>
        )}
        {children}
      </section>
    </Grid>
  </BannerStyles>
);
export default Banner;
