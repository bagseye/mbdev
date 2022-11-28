import React, { useEffect, useRef } from "react";
import { CardGlobalStyles as ServicesCardGlobalStyles } from "../Cards/CardsGlobalStyles";
import { motion, useAnimation } from "framer-motion";

const Service = ({ children, route, to, name, excerpt }) => {
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
    <ServicesCardGlobalStyles to={to} ref={ref}>
      <div className="img__area">
        {children}
      </div>
      {route && <p className="route">{route}</p>}
      <motion.div
        className="content__area"
        initial={{ opacity: 0, y: "20px" }}
        animate={controls}
      >
        <h2 className="as__h1">{name}</h2>
        <h4>{excerpt}</h4>
        <span className="btn">Learn More</span>
      </motion.div>
    </ServicesCardGlobalStyles>
  );
};

export default Service;
