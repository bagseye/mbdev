import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const BannerGridColumn = styled.section`
  grid-column: 1 / 7;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const BannerStyles = styled.div`
  position: relative;

  .cmsbanner__cont {
    position: relative;
    z-index: 1;
    max-width: 1580px;
    margin: 0 auto;
    height: 100%;
    padding: calc(var(--gridGap) * 5) var(--gridGap);
  }

  .banner__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const CMSBanner = ({ bannerContent, image }) => {
  const bannerImage = getImage(image);

  return (
    <BannerStyles styles={{ backgroundColor: image ? "#000" : "" }}>
      <div className="cmsbanner__cont">
        <motion.h1
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          {bannerContent}
        </motion.h1>
      </div>
      {bannerImage && (
        <GatsbyImage className="banner__bg" image={bannerImage} />
      )}
    </BannerStyles>
  );
};

export default CMSBanner;

CMSBanner.propTypes = {
  bannerContent: PropTypes.string.isRequired,
  scrollerText: PropTypes.string,
  image: PropTypes.object,
};
