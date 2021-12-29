import React from "react";
import { PerksGlobalStyles } from "./PerksStyles";
import PropTypes from "prop-types";

const Perks = ({ children, title, cta }) => {
  return (
    <PerksGlobalStyles className="sectiongap">
      <div className="container">
        {title && (
          <div className="content__area">
            <h2 className="perks__title as__h1">{title}</h2>
          </div>
        )}
        <div className="perks__container">{children}</div>
        {cta && (
          <div className="content__area">
            <h2 className="as__h1">{cta}</h2>
            <button type="button" className="btn">
              Get in touch
            </button>
          </div>
        )}
      </div>
    </PerksGlobalStyles>
  );
};

export default Perks;

Perks.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  cta: PropTypes.string,
};
