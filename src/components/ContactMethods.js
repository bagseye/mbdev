import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const ContactMethodsStyles = styled.section`
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    margin: 300px auto;
  }

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

const ContactMethods = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            transition: { duration: 0.75, delay: 0.35 },
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <ContactMethodsStyles className="container" ref={ref}>
      <div className="container-grid">
        <div className="contact__content" itemScope itemType="http://schema.org/LocalBusiness">
          <motion.h2 initial={{ opacity: 0 }} animate={controls}>
            If you're looking for web design in Inverness, or beyond, you can contact me directly with any questions or requests at{" "}
            <a href="mailto:hello@morganbaker.dev" title="Email Address">
              <span itemProp="email">hello@morganbaker.dev</span>
            </a>.
            <br />
            Alternatively, call <a href="tel:00447736592188" title="Telephone Number">
              <span itemProp="phone">07736 592 188</span>
            </a>.
          </motion.h2>
        </div>
      </div>
    </ContactMethodsStyles>
  );
};

export default ContactMethods;
