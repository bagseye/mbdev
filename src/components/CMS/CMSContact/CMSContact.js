import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CMSContactStyles, CMSContactMediaStyles } from "./CMSContactStyles";
import PropTypes from "prop-types";

const CMSContact = ({ title, content, media }) => {
  const image = getImage(media);
  return (
    <>
      <CMSContactMediaStyles>
        <div className="media">
          <GatsbyImage image={image} />
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
            <h2>{title}</h2>
            <p>{content}</p>
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

CMSContact.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
};
