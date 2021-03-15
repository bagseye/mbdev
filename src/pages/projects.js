import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Development from "../components/Development";
import { SplitContainerStyles } from "../styles/GlobalStyles";

const ExtendedSplitContainerStyles = styled(SplitContainerStyles)`
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

export default projectsPage;
