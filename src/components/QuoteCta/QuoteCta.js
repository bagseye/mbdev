import React from "react";
import { Link } from "gatsby";
import { QuoteCtaStyles } from "./QuoteCtaStyles";
import { StaticImage } from "gatsby-plugin-image";

const QuoteCta = () => {
  return (
    <QuoteCtaStyles>
      <div className="cont">
        <h2>Looking for a quote?</h2>
        <p>Get in touch today with details of your project.</p>
        <Link className="btn" to="/contact">
          Get in touch
        </Link>
      </div>
      <div className="media">
        <StaticImage
          src="../../images/circles-abstract.jpg"
          transformOptions={{ fit: "cover" }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </QuoteCtaStyles>
  );
};

export default QuoteCta;
