import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";
import Button from "./Button/Button";

const DevelopmentContainer = styled.section`
  position: relative;
  background-color: #000;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.4);
  padding-left: var(--gridGap);
  padding-right: var(--gridGap);

  .content__area {
    position: relative;
    z-index: 1;
    max-width: calc(500px - var(--gridGap));

    @media (min-width: 768px) {
      max-width: calc(750px - var(--gridGap));
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
  const { slug, images, excerpt, name } = project;
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
    <DevelopmentContainer className="container sectiongap paddinggap" ref={ref}>
      <ProjectImage>
        <GatsbyImage
          loading="lazy"
          image={projectImg}
          alt={projectImgAlt ? projectImgAlt : "Project Image"}
          className="project__img"
        />
      </ProjectImage>

      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="content__area"
      >
        <h2 className="as__h1">{name}</h2>
        <h2>{excerpt}</h2>
        <Button to={base ? `${base}/${slug}` : `${slug}`} text="View project" />
      </motion.div>
    </DevelopmentContainer>
  );
};

export default Development;
