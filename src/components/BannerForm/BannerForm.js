import React from "react";
import {
  BannerFormGlobalStyles,
  titleVariants,
  contentAreaVariant,
} from "./BannerFormStyles";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Quote from "../Quote/Quote";
import Button from "../Button/Button";
import { StaticImage } from "gatsby-plugin-image";

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
            <div className="form__title">
              <h2 className="as__h1">Request a quote.</h2>
            </div>
            <form
              name="quote"
              method="post"
              action="/thanks/"
              data-netlify="true"
              netlify-honeypot="quote-bot-field"
            >
              <input type="hidden" name="form-name" value="quote" />
              <div style={{ visibility: "hidden", height: "0px" }}>
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="quote-bot-field" />
                </label>
              </div>
              <div className="form__columns">
                <div className="form__column--one">
                  <div className="area">
                    <label>
                      Your name <sup>(Required)</sup>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div className="area">
                    <label>
                      Email contact <sup>(Required)</sup>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@email.com..."
                    />
                  </div>
                  <div className="area">
                    <label>Phone number </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Best contact number..."
                    />
                  </div>
                  <div className="area">
                    <label>Your business name </label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Enter your business name..."
                    />
                  </div>
                </div>

                <div className="form__column--two">
                  <div className="area">
                    <label>Business website address </label>
                    <input
                      type="text"
                      name="website"
                      placeholder="www.example-business.com..."
                    />
                  </div>
                  <div className="area">
                    <label>Your requirments </label>
                    <textarea
                      type="text"
                      name="requirements"
                      placeholder="A brief description of what you are looking for..."
                    />
                  </div>
                  <Button as="button" type="submit" text="Send this request" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="banner__bg">
        <StaticImage
          src="../../images/smoke-purple.jpg"
          alt="Decoration banner"
        />
      </div>
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