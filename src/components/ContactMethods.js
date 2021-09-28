import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactMethodsStyles = styled.section`
  padding: 0 var(--gridGap);
  max-width: 1580px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .contact__content {
    grid-column: 1 / 7;

    @media (min-width: 768px) {
      grid-column: 1 / 5;
    }
  }

  h2 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;

    a {
      font-weight: 700;
      text-decoration-thickness: 0.2rem;

      @media (min-width: 768px) {
        text-decoration-thickness: 0.35rem;
      }
    }
  }
`;

const ContactMethods = () => (
  <ContactMethodsStyles>
    <div className="container-grid">
      <div className="contact__content">
        <motion.h2
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          You can contact me directly with any questions or requests at{" "}
          <a href="mailto:hello@morganbaker.dev">hello@morganbaker.dev</a>.
        </motion.h2>
      </div>
    </div>
  </ContactMethodsStyles>
);

export default ContactMethods;
