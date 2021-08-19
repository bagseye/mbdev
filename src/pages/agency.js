import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
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
    <Layout>
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
    </Layout>
  );
};

export default agencyPage;
