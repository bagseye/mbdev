import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";
import Button from "../Button/Button";
import { ProjectGlobalStyles } from "./ProjectsStyles";
import PropTypes from "prop-types";

const Project = ({ project }) => {
  const { excerpt, name, gatsbyPath, images } = project;

  const projectImage = getImage(images[0]);

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
    <ProjectGlobalStyles className="container sectiongap paddinggap" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="content__area"
      >
        <h2 className="as__h1">{name}</h2>
        <h2>{excerpt}</h2>
        <Button to={gatsbyPath} text="View project" />
      </motion.div>
      <div className="project__img">
        <GatsbyImage image={projectImage} alt="Project Image" />
      </div>
    </ProjectGlobalStyles>
  );
};

export default Project;

Project.propTypes = {
  name: PropTypes.string,
  excerpt: PropTypes.string,
  gatsbyPath: PropTypes.string,
  images: PropTypes.object,
};
