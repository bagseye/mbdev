import React from "react";
import { CardContainerGlobalStyles } from "./CardsGlobalStyles";
import PropTypes from "prop-types";

const CardContainer = ({ children }) => {
  return (
    <CardContainerGlobalStyles className="container sectiongap">
      {children}
    </CardContainerGlobalStyles>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
