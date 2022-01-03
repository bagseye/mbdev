import React from "react";
import { SlideGlobalStyles } from "./SlideStyles";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Slide = ({ children, title, subTitle, content }) => {
  return (
    <SlideGlobalStyles
      className="sectiongap paddinggap"
      styles={{ backgroundColor: children ? "#000" : "" }}
    >
      <div className="container">
        <div className="content__area">
          <h2>{title}</h2>
          {subTitle && <p className="leadin">{subTitle}</p>}
          {content && <p>{content}</p>}
          <Button to="/contact" />
        </div>
      </div>
      {children}
    </SlideGlobalStyles>
  );
};

export default Slide;

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.element.isRequired,
};
