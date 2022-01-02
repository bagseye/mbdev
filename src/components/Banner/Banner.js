import React from "react";
import Button from "../Button/Button";
import {
  BannerGlobalStyles,
  titleVariants,
  contentAreaVariant,
} from "./BannerStyles";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { BsChevronDown as Scroller } from "react-icons/bs";

const Banner = ({
  title,
  subTitle,
  children,
  scrollerText,
  ctaOneLink,
  ctaOneText,
  ctaTwoLink,
  ctaTwoText,
}) => {
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

            {/* If there is either a CTA one or CTA two, show this container */}
            {(ctaOneText && ctaOneLink) || (ctaTwoText && ctaTwoLink) ? (
              <motion.div
                className="banner__ctas"
                transition={{ ease: "easeOut", duration: 0.65 }}
                variants={titleVariants}
              >
                {ctaOneText && ctaOneLink ? (
                  <Button to={ctaOneLink} text={ctaOneText} />
                ) : null}

                {ctaTwoText && ctaTwoLink ? (
                  <Button to={ctaTwoLink} text={ctaTwoText} />
                ) : null}
              </motion.div>
            ) : null}
            {/* End CTA container */}

            {/* If there is scrollerText, show the scroller */}
            {scrollerText && (
              <p className="scroll__to">
                {scrollerText}{" "}
                <motion.span
                  style={{
                    display: "inline-flex",
                  }}
                  animate={{ translateY: [-15, 0, 15], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    loop: Infinity,
                    repeatDelay: 0.25,
                  }}
                >
                  <Scroller />
                </motion.span>
              </p>
            )}
            {/* End scroller */}
          </motion.div>
        </div>
      )}
      {children}
    </BannerGlobalStyles>
  );
};

export default Banner;

Banner.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.element,
  scrollerText: PropTypes.string,
  ctaOneText: PropTypes.string,
  ctaOneLink: PropTypes.string,
  ctaTwoText: PropTypes.string,
  ctaTwoLink: PropTypes.string,
};
