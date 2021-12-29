import React from "react";
import { SlideGlobalStyles } from "./SlideStyles";
import PropTypes from "prop-types";

const Slide = ({ children, title, content }) => {
  return (
    <SlideGlobalStyles className="sectiongap paddinggap">
      <div className="container">
        <div className="content__area">
          <h2>{title}</h2>
          {content && <p>{content}</p>}
        </div>
      </div>
      {children}
    </SlideGlobalStyles>
  );
};

export default Slide;

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  children: PropTypes.element.isRequired,
};
