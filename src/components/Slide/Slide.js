import React from "react";
import { SlideGlobalStyles } from "./SlideStyles";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import QuickQuote from "../QuickQuote/QuickQuote";

const Slide = ({ children, title, subTitle, content, contentTwo, anchor, form }) => {
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
          {contentTwo && <p>{contentTwo}</p>}
          {anchor ? <Button anchor={anchor} /> : <Button to="/contact" /> }
        </div>
        {form && 
        <div class="form__area">
          <QuickQuote />
        </div>}
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
  contentTwo: PropTypes.string,
  children: PropTypes.element.isRequired,
  anchor: PropTypes.string,
  fform: PropTypes.bool
};
