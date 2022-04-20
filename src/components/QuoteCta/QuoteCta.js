import React from "react";
import { Link } from "gatsby";
import { QuoteCtaStyles } from "./QuoteCtaStyles";
import { StaticImage } from "gatsby-plugin-image";

const QuoteCta = () => {
  return (
    <QuoteCtaStyles>
      <div className="cont">
        <h2>Looking for a quote, or have a project in mind?</h2>
        <p>
          Get in touch today with details of your project. Or call{" "}
          <a href="tel:00447736592188">07736 592 188</a> to discuss your
          requirements.
        </p>
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
