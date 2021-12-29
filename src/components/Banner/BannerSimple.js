import React from "react";
import { BannerGlobalStyles } from "./BannerStyles";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const contentAreaVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.35,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const titleVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 25 },
};

const BannerSimple = ({ title, subTitle, children }) => {
  return (
    <BannerGlobalStyles styles={{ backgroundColor: children ? "#000" : "" }}>
      {title && (
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 1 }}
            variants={contentAreaVariant}
            className="content__area"
          >
            <motion.h1
              transition={{ ease: "easeOut", duration: 0.65 }}
              variants={titleVariants}
            >
              {title}
            </motion.h1>
            {subTitle && (
              <motion.h2
                transition={{ ease: "easeOut", duration: 0.65 }}
                variants={titleVariants}
              >
                {subTitle}
              </motion.h2>
            )}
          </motion.div>
        </div>
      )}
      {children && children}
    </BannerGlobalStyles>
  );
};

export default BannerSimple;

BannerSimple.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.element.isRequired,
};
