import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

const Content = styled(motion.aside)`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

const FullWidthImg = () => {
  const queryResponse = useStaticQuery(getImage);
  return (
    <Content
      initial={{ opacity: 0, y: 25, scale: 0.99 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ ease: 'easeOut', duration: 1.35, delay: 1.65 }}
    >
      <Img fluid={queryResponse.fluid.childImageSharp.fluid} />
    </Content>
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
