import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { CMSContactStyles, CMSContactMediaStyles } from "./CMSContactStyles";
import Button from "../../Button/Button";

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
            maxWidth: "calc(1500px - (var(--gridGap) * 2))",
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
            <Button to="/contact" text="Get in Touch" />
          </div>
        </div>
      </CMSContactStyles>
    </>
  );
};

export default CMSContact;
