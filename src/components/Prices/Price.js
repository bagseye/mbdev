import React from "react";
import { PriceItemStyles } from "./PricesStyles";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Price = ({ title, cost, content }) => {
  return (
    <PriceItemStyles>
      <h2>{title}</h2>
      {cost && <h2 className="as__h1">From <span>£{cost}</span></h2>}
      {content && <p>{content}</p>}
      <Button anchor="#contactForm" text="Enquire" />
    </PriceItemStyles>
  );
};

export default Price;

Price.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  content: PropTypes.string
};