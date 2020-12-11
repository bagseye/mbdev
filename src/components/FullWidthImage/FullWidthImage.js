import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

const FullWidthImg = () => {
  const queryResponse = useStaticQuery(getImage);
  return (
    <motion.aside
      initial={{ opacity: 0, y: 25, scale: 0.99 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ ease: 'easeOut', duration: 1.35, delay: 1.65 }}
    >
      <Img fluid={queryResponse.fluid.childImageSharp.fluid} />
    </motion.aside>
  );
};

export default FullWidthImg;

const getImage = graphql`
  query {
    fluid: file(relativePath: { eq: "bonneville-bag-mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
