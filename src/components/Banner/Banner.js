import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronDown as Scroller, BsStarFill } from "react-icons/bs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import videoPlaceholder from "../../../static/wave-still.jpg";
import desktopVideo from "../../../static/wave-desktop.mp4";
import tabletVideo from "../../../static/wave-mobile.mp4";
import mobileVideo from "../../../static/wave-mobile.mp4";

const BannerGridColumn = styled.section`
  grid-column: 1 / 7;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const BannerStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

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

const Banner = ({ bannerContent, scrollerText, image }) => {
  const bannerImage = getImage(image);
  const placeholderImage = getImage(videoPlaceholder);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const getVidSrc = (width) => {
    if (width >= 1080) return desktopVideo;
    if (width >= 720) return tabletVideo;
    return mobileVideo;
  };

  const vidSrc = getVidSrc(window.innerWidth);

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
        {scrollerText && (
          <p className="scroll__to">
            {scrollerText}{" "}
            <motion.div
              style={{
                display: "inline-flex",
                marginLeft: "10px",
                fontSize: "20px",
              }}
              animate={{ translateY: [-15, 0, 15], opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                loop: Infinity,
                repeatDelay: 0.25,
              }}
            >
              <Scroller />
            </motion.div>
          </p>
        )}
      </div>
      {bannerImage && (
        <GatsbyImage className="banner__bg" image={bannerImage} />
      )}
      {!bannerImage && (
        <>
          <GatsbyImage
            className="banner__video--placeholder"
            image={placeholderImage}
            style={{ opacity: isVideoLoaded ? 0 : 1 }}
          />
          <div
            className="banner__video"
            onLoadedData={onLoadedData}
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
          >
            <video autoPlay loop muted playsInline src={vidSrc}></video>
          </div>
        </>
      )}
    </BannerStyles>
  );
};

export default Banner;

Banner.propTypes = {
  bannerContent: PropTypes.string.isRequired,
  scrollerText: PropTypes.string,
  image: PropTypes.object,
};
