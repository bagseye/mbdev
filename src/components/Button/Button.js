import React from "react";
import PropTypes from "prop-types";
import { ButtonGlobalStyles } from "./ButtonStyles";

const Button = ({ as, to, text, type }) => {
  return (
    <ButtonGlobalStyles as={as} to={to} type={type}>
      {text ? text : "Get in touch"}
    </ButtonGlobalStyles>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  as: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
};
