import React from "react";
import { BsChevronDown as Scroller } from "react-icons/bs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { BannerStyles, BannerGridColumn } from "./BannerStandardStyles";

const BannerStandard = ({ title, image }) => {
  const bannerImage = getImage(image);

  return (
    <BannerStyles>
      <div className="container-grid">
        <BannerGridColumn>
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            {title}
          </motion.h1>
        </BannerGridColumn>
        <p className="scroll__to">
          Read about the project{" "}
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
      </div>
      <GatsbyImage className="banner__bg" image={bannerImage} />
    </BannerStyles>
  );
};
export default BannerStandard;
