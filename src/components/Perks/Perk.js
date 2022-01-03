import React from "react";
import { PerkItemStyles } from "./PerksStyles";
import PropTypes from "prop-types";

const Perk = ({ title, content, icon }) => {
  return (
    <PerkItemStyles>
      {icon && icon}
      <h2>{title}</h2>
      {content && <h4>{content}</h4>}
    </PerkItemStyles>
  );
};

export default Perk;

Perk.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};
