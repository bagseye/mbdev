import React from "react";
import { Link } from "gatsby";
import { CallToActionStyles } from "./CallToActionStyles";
import { StaticImage } from "gatsby-plugin-image";

const CallToAction = ({ message, subMessage }) => {
  return (
    <CallToActionStyles>
      <div className="container">
        <div className="col">
          <h2>{message}</h2>
          <p>{subMessage}</p>
          <Link className="btn btn__white" to="/request-quote">
            Get a quote
          </Link>
        </div>
      </div>
      <StaticImage
        className="cta__img"
        objectFit="cover"
        src="../../images/macbook-black-desk.jpg"
        alt="Macbook on a black desk"
        placeholder="blurred"
      />
    </CallToActionStyles>
  );
};

export default CallToAction;
