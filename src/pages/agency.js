import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import SEO from "../components/SEO";
import Development from "../components/Development";
import { SplitContainerStyles } from "../styles/GlobalStyles";
import GeneralContent from "../components/GeneralContent/GeneralContent";

const ExtendedSplitContainerStyles = styled(SplitContainerStyles)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gridGap);
`;

export const getAgency = graphql`
  query {
    allContentfulAgency {
      edges {
        node {
          name
          slug
          excerpt
          images {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP]
              quality: 90
            )
          }
        }
      }
    }
  }
`;

const agencyPage = ({ data }) => {
  const developmentData = data.allContentfulAgency.edges;

  return (
    <>
      <SEO title="Agency Projects" noIndex />
      <div className="container__body">
        <GeneralContent title="Agency Projects" />
      </div>
      <ExtendedSplitContainerStyles>
        {developmentData.map(({ node }) =>
          node.slug ? (
            <Development key={node.name} noPrefix project={node} />
          ) : null
        )}
      </ExtendedSplitContainerStyles>
    </>
  );
};

export default agencyPage;
