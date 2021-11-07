import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";

const DevelopmentContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #000;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.4);

  .project__content {
    grid-column: 1 / 7;

    @media (min-width: 768px) {
      grid-column: 1 / 5;
    }
  }

  .project__containter {
    position: relative;
    width: 100%;
    max-width: 1580px;
    margin: 0 auto;
    padding: 0 var(--gridGap);
  }

  h2 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;
  }

  .project__link {
    font-weight: 700;
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    text-decoration-thickness: 0.2rem;

    @media (min-width: 768px) {
      text-decoration-thickness: 0.35rem;
    }
  }

  .project__img {
    height: 100%;
    > div {
      padding-top: 0 !important;
    }

    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: calc((3 / 4) * 100%);
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;

  img {
    transition: transform 0.5s ease, opacity 500ms ease 0s !important;
  }
`;

const Development = ({ project, noPrefix, base }) => {
  const { slug, images, excerpt } = project;
  const projectImg = getImage(images[0]);
  const projectImgAlt = images[0].description;

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
    <DevelopmentContainer ref={ref}>
      <ProjectImage>
        <GatsbyImage
          loading="lazy"
          image={projectImg}
          alt={projectImgAlt ? projectImgAlt : "Project Image"}
          className="project__img"
        />
      </ProjectImage>

      <div className="project__containter">
        <div className="container-grid">
          <motion.div
            className="project__content"
            initial={{ opacity: 0 }}
            animate={controls}
          >
            <h2>{excerpt}</h2>
            <Link
              className="project__link"
              to={base ? `${base}/${slug}` : `${slug}`}
            >
              View the project
            </Link>
          </motion.div>
        </div>
      </div>
    </DevelopmentContainer>
  );
};

export default Development;
