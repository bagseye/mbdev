import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Development from "./Development";

// const FeaturedProjectsStyles = styled.section`
// max-widt

// `;

const FeatureDevelopments = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(limit: 2, filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            slug
            excerpt
            images {
              description
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP]
                quality: 90
                aspectRatio: 1.333
              )
            }
          }
        }
      }
    }
  `);

  const developmentData = data.allContentfulProjects.edges;

  return (
    <section>
      {developmentData.map(({ node }) =>
        node.slug ? (
          <Development key={node.name} base="projects" project={node} />
        ) : null
      )}
    </section>
  );
};

export default FeatureDevelopments;
