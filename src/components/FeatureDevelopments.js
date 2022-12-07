import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Development from "./Development";

const FeatureDevelopments = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(limit: 4, filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            slug
            excerpt
            images {
              description
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
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
