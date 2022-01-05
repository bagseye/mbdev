import React from "react";
import { TechItemGlobalStyles } from "./TechStyles";
import PropTypes from "prop-types";

const Tech = ({ children }) => {
  return <TechItemGlobalStyles>{children}</TechItemGlobalStyles>;
};

export default Tech;

Tech.propTypes = {
  children: PropTypes.element.isRequired,
};
