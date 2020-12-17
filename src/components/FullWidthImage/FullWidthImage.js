import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";

const FullWidthImg = () => {
  const queryResponse = useStaticQuery(getImage);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.35, delay: 1.5 }}
    >
      <Img fluid={queryResponse.fluid.childImageSharp.fluid} />
    </motion.div>
  );
};

export default FullWidthImg;

const getImage = graphql`
  query {
    fluid: file(relativePath: { eq: "bonneville-bag-mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
