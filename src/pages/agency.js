import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Development from "../components/Development";
import Grid from "../components/Grid";
import Layout from "../components/Layout";

const SplitContainerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
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
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
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
      <Banner description="Agency Projects" />
      <SplitContainerStyles>
        <Grid>
          {developmentData.map(({ node }) =>
            node.slug ? (
              <Development key={node.name} noPrefix project={node} />
            ) : null
          )}
        </Grid>
      </SplitContainerStyles>
    </>
  );
};

export default agencyPage;
