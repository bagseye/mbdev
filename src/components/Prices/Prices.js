import React from "react";
import {PricesGlobalStyles} from './PricesStyles';
import PropTypes from "prop-types";

const Prices = ({ children, title, cta }) => {
  return (
    <PricesGlobalStyles className="sectiongap">
      <div className="container">
        {title && (
          <div className="content__area">
            <h2 className="prices__title as__h1">{title}</h2>
          </div>
        )}
        <div className="prices__container">{children}</div>
        {cta && (
          <div className="content__area">
            <h2 className="as__h1">{cta}</h2>
          </div>
        )}
      </div>
    </PricesGlobalStyles>
  );
};

export default Prices;

Prices.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  cta: PropTypes.string,
};