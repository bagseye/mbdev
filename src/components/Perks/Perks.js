import React from "react";
import { PerksGlobalStyles } from "./PerksStyles";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Perks = ({ children, title, cta, ctaSub, ctaSubTwo, anchor }) => {
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
            {ctaSub && <p className="leadin">{ctaSub}</p>}
            {ctaSubTwo && <p className="leadin">{ctaSubTwo}</p>}
            {anchor ? <Button anchor={anchor} /> : <Button to="/contact" /> }
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
  ctaSub: PropTypes.string,
  ctaSubTwo: PropTypes.string,
  anchor: PropTypes.string
};
