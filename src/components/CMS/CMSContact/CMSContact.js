import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { CMSContactStyles, CMSContactMediaStyles } from "./CMSContactStyles";

const CMSContact = () => {
  return (
    <>
      <CMSContactMediaStyles>
        <div className="media">
          <StaticImage src="../../../images/apple-products.jpg" />
        </div>
      </CMSContactMediaStyles>
      <CMSContactStyles>
        <div
          style={{
            maxWidth: "1500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="cont">
            <h4>Get in touch today</h4>
            <h2>Are you ready to get started?</h2>
            <p>
              If you’re ready to give your company website an overhaul, or
              looking for a quote, or even just looking for some help and
              guidance as you take the next step, get in touch today. Moving
              your business to the next stage starts today!
            </p>
            <Link className="btn" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </CMSContactStyles>
    </>
  );
};

export default CMSContact;
