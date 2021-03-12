import React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const FullWidthImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.35, delay: 1.5 }}
    >
      <StaticImage
        src="../../images/bonneville-bag-mockup.jpg"
        alt="Bonneville logo used on a bag"
        placeholder="traced"
        layout="fullWidth"
        aspectRatio={4 / 3}
      />
    </motion.div>
  );
};

export default FullWidthImage;
