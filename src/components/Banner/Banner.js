import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { BsChevronDown as Scroller } from "react-icons/bs";
import { motion } from "framer-motion";

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
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;
  }

  .scroll__to {
    position: absolute;
    bottom: calc(var(--gridGap) * 2);
    left: var(--gridGap);
    font-size: 1rem;
    font-weight: 300;
  }
`;

const Banner = () => (
  <BannerStyles>
    <div className="container-grid">
      <BannerGridColumn>
        <motion.h1
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          Bespoke web <span>design & development</span> in Inverness. Creating{" "}
          <span>modern, user-friendly</span> experiences using{" "}
          <span>Wordpress</span>.
        </motion.h1>
      </BannerGridColumn>
    </div>
    <p className="scroll__to">
      Scroll for recent projects{" "}
      <motion.div
        style={{
          display: "inline-flex",
          marginLeft: "10px",
          fontSize: "20px",
        }}
        animate={{ translateY: [-15, 0, 15], opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          loop: Infinity,
          repeatDelay: 0.25,
        }}
      >
        <Scroller />
      </motion.div>
    </p>
  </BannerStyles>
);
export default Banner;
