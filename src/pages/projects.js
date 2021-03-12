import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Development from "../components/Development";

const SplitContainerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--gridGap) * 2);
  padding-bottom: var(--margins);
`;

export const getProjects = graphql`
  query {
    allContentfulProjects {
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

const projectsPage = ({ data }) => {
  const developmentData = data.allContentfulProjects.edges;

  return (
    <>
      <Banner heading="Projects" />
      <SplitContainerStyles>
        {/* <Grid> */}
        {developmentData.map(({ node }) =>
          node.slug ? (
            <Development key={node.name} noPrefix project={node} />
          ) : null
        )}
        {/* </Grid> */}
      </SplitContainerStyles>
    </>
  );
};

export default projectsPage;
