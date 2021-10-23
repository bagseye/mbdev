import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const ProjectNavigationStyles = styled.section`
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

const ProjectNavigation = ({ next, prefix }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            transition: { duration: 0.75, delay: 0.75 },
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
    <ProjectNavigationStyles ref={ref}>
      <div className="container-grid">
        <div className="contact__content">
          <motion.h2 initial={{ opacity: 0 }} animate={controls}>
            {next !== null && (
              <>
                Take a look at the next project -{" "}
                <Link to={`/${prefix}/${next.slug}`}>{next.name}</Link> -{" "}
              </>
            )}
            Contact me for a quote using{" "}
            <a href="mailto:hello@morganbaker.dev">hello@morganbaker.dev</a> -
            or return <Link to="/">home</Link>.
          </motion.h2>
        </div>
      </div>
    </ProjectNavigationStyles>
  );
};

export default ProjectNavigation;
