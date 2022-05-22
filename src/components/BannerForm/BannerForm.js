import React from "react";
import {
  BannerFormGlobalStyles,
  titleVariants,
  contentAreaVariant,
} from "./BannerFormStyles";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Quote from "../Quote/Quote";

const BannerForm = ({ title, subTitle, children }) => {
  return (
    <BannerFormGlobalStyles
      styles={{ backgroundColor: children ? "#000" : "" }}
    >
      {title && (
        <div className="container">
          <div className="container__content">
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
          <div className="container__form">
            <Quote />
          </div>
        </div>
      )}
      {children}
    </BannerFormGlobalStyles>
  );
};

export default BannerForm;

BannerForm.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.element,
};
