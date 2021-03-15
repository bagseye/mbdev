import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import Grid from "../Grid";

const BannerGridColumn = styled.section`
  grid-column: 1 / 7;

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const BannerStyles = styled(motion.div)`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin: var(--margins) auto;

  h1 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: var(--highlight);
  }

  h1,
  h2 {
    span {
      font-weight: 600;
      font-style: italic;
      color: var(--primary);
    }
  }

  h2 {
    margin-bottom: calc(var(--gridGap) * 2);
  }

  .btn {
    &__inverse {
      margin-left: var(--gridGap);
    }
  }
`;

const Banner = ({ heading }) => (
  <BannerStyles>
    <Grid>
      <BannerGridColumn>
        {heading ? (
          <h1>{heading}</h1>
        ) : (
          <>
            <h1>
              I'm a <span>web developer from Inverness</span> who believes
              design should be <span>purposeful</span>, <span>accessible</span>,
              and <span>long-lasting</span>
            </h1>
            <h2>
              Web design should not be complicated. It is about giving your user
              the information they require in the most logical way possible. I
              design and build applications that{" "}
              <span>focus on user experience</span>, while keeping a clean
              design ethos.
            </h2>
            <Link to="/projects" className="btn">
              View All Projects
            </Link>
            <Link to="/contact" className="btn btn__inverse">
              Get In Touch
            </Link>
          </>
        )}
      </BannerGridColumn>
    </Grid>
  </BannerStyles>
);
export default Banner;
