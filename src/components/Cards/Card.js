import React, { useEffect, useRef } from "react";
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CardGlobalStyles } from "./CardsGlobalStyles";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Card = ({ node, route, to }) => {
  const { name, excerpt, images } = node;
  const cardImage = images ? getImage(images[0]) : null;
  const cardImageAlt = images ? images[0].description : null;

  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 0.5 },
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <CardGlobalStyles ref={ref}>
      <Link to={to}>
        <div className="img__area">
          <GatsbyImage
            image={cardImage}
            alt={cardImageAlt ? cardImageAlt : "Card Image"}
          />
        </div>
        {route && <p className="route">{route}</p>}
        <motion.div
          className="content__area"
          initial={{ opacity: 0, y: "20px" }}
          animate={controls}
        >
          <h2 className="as__h1">{name}</h2>
          <h4 className="leadin">{excerpt}</h4>
          <Button as="span" text="View Project" />
        </motion.div>
      </Link>
    </CardGlobalStyles>
  );
};

export default Card;

Card.propTypes = {
  node: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  route: PropTypes.string,
};
