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
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-top: calc(var(--gridGap) * 5);
  padding-bottom: calc(var(--gridGap) * 5);

  .container-grid {
    position: relative;
    z-index: 1;
    max-width: 1580px;
    margin: 0 auto;
    padding: 0 var(--gridGap);
    height: 100%;
  }

  .scroll__to {
    position: absolute;
    bottom: calc(var(--gridGap) * 2);
    left: var(--gridGap);
    font-size: 1rem;
    font-weight: 300;
    margin: 0 auto;
    max-width: 1580px;
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

  .banner__video--placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    filter: blur(6px);
    transition: opacity 0.5s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .banner__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    transition: opacity 0.5s;

    video {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
      opacity: 0.25;
      filter: blur(6px);
    }
  }
`;

const CMSBanner = ({ bannerContent, image }) => {
  const bannerImage = getImage(image);

  return (
    <BannerStyles styles={{ backgroundColor: image ? "#000" : "" }}>
      <div className="container-grid">
        <BannerGridColumn>
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            {bannerContent}
          </motion.h1>
        </BannerGridColumn>
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
