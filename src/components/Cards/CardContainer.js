import React from "react";
import { CardContainerGlobalStyles } from "./CardsGlobalStyles";

const CardContainer = ({ children }) => {
  return (
    <CardContainerGlobalStyles className="container sectiongap">
      {children}
    </CardContainerGlobalStyles>
  );
};

export default CardContainer;
