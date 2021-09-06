import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Development from "./Development";
import GeneralContent from "./GeneralContent/GeneralContent";
import Layout from "./Layout";
import SEO from "./SEO";
import styled from "styled-components";
import { SplitContainerStyles } from "../styles/GlobalStyles";

const ExtendedSplitContainerStyles = styled(SplitContainerStyles)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gridGap);
`;

const DashboardArea = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAgency {
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

  const agencyData = data.allContentfulAgency.edges;
  return (
    <>
      <SEO title="Agency Projects" noIndex />
      <Layout>
        <div className="container__body">
          <GeneralContent title="Agency Projects" />
        </div>
        <ExtendedSplitContainerStyles>
          {agencyData.map(({ node }) =>
            node.slug ? (
              <Development key={node.name} noPrefix project={node} />
            ) : null
          )}
        </ExtendedSplitContainerStyles>
      </Layout>
    </>
  );
};

export default DashboardArea;