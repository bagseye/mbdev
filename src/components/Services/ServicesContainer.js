import React from "react";
import { CardContainerGlobalStyles as ServicesContainerGlobalStyles } from "../Cards/CardsGlobalStyles";
import PropTypes from "prop-types";

const ServicesContainer = ({ children }) => {
  return (
    <ServicesContainerGlobalStyles className="container sectiongap">
      {children}
    </ServicesContainerGlobalStyles>
  );
};

export default ServicesContainer;

ServicesContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};