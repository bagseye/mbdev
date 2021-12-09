import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { BsChevronDown as Scroller } from "react-icons/bs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const BannerGridColumn = styled.section`
  grid-column: 1 / 7;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  gap: var(--gridGap);

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

  .banner__ctas {
    display: flex;
    justify-content: flex-start;
    gap: var(--gridGap);
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

const Banner = ({
  bannerContent,
  scrollerText,
  image,
  ctaOneText,
  ctaOneLink,
  ctaTwoText,
  ctaTwoLink,
}) => {
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
          {/* If there is either a CTA one or CTA two, show this container */}
          {(ctaOneText && ctaOneLink) || (ctaTwoText && ctaTwoLink) ? (
            <motion.div
              className="banner__ctas"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.75, delay: 0.85 }}
            >
              {ctaOneText && ctaOneLink ? (
                <Link to={`/${ctaOneLink}`} className="btn">
                  {ctaOneText}
                </Link>
              ) : null}

              {ctaTwoText && ctaTwoLink ? (
                <Link to={`/${ctaTwoLink}`} className="btn btn__inverse">
                  {ctaTwoText}
                </Link>
              ) : null}
            </motion.div>
          ) : null}
          {/* End CTA container */}
        </BannerGridColumn>
        {/* Begin Scroller - If there is a scroller */}
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
        {/* End scroller */}
      </div>
      {/* Begin background image - if one supplied */}
      {bannerImage && (
        <GatsbyImage className="banner__bg" image={bannerImage} />
      )}
      {/* End background image */}
    </BannerStyles>
  );
};

export default Banner;

Banner.propTypes = {
  bannerContent: PropTypes.string.isRequired,
  scrollerText: PropTypes.string,
  ctaOneText: PropTypes.string,
  ctaOneLink: PropTypes.string,
  ctaTwoText: PropTypes.string,
  ctaTwoLink: PropTypes.string,
  image: PropTypes.object,
};
