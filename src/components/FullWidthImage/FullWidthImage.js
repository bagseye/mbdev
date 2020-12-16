import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const FullWidthImg = () => {
  const queryResponse = useStaticQuery(getImage);
  return <Img fluid={queryResponse.fluid.childImageSharp.fluid} />;
};

export default FullWidthImg;

const getImage = graphql`
  query {
    fluid: file(relativePath: { eq: "bonneville-bag-mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
