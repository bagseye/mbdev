import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";
import ProjectNavigation from "../components/ProjectNavigation";
import Banner from "../components/Banner/Banner";
import styled from "styled-components";

const TechUsed = styled.div`
  padding: 0 var(--gridGap);
  margin-top: calc(var(--gridGap) * 3);
  margin-bottom: calc(var(--gridGap) * 3);

  .col {
    &:nth-child(1) {
      grid-column: 1 / 7;

      @media (min-width: 834px) {
        grid-column: 1 / 3;
      }
    }

    &:nth-child(2) {
      grid-column: 1 / 7;

      @media (min-width: 834px) {
        grid-column: 3 / 5;
      }
    }
  }
`;

const projectTemplate = ({ data, pageContext }) => {
  const nextProject = pageContext.next;

  const {
    name,
    excerpt,
    richDescription,
    richDescription: { raw },
    images,
    technology,
    website,
  } = data.project;

  const options = {
    // Pass in the node and dril down to the required data
    // renderNode: {
    //   // Render the contentful rich content image
    //   "embedded-asset-block": (node) => (
    //     <div className="content-image">
    //       <img
    //         src={node.data.target.fields.file["en-US"].url}
    //         alt={node.data.target.fields.title["en-US"]}
    //       />
    //     </div>
    //   ),
    // },
  };

  const [mainImage, ...projectImages] = images;

  return (
    <>
      <SEO title={name} description={excerpt} />
      <Layout>
        <Banner
          bannerContent={excerpt}
          image={mainImage}
          scrollerText="Scroll to view this project"
        />
        {technology || website ? (
          <TechUsed>
            <div className="container container-grid">
              {technology && (
                <div className="col">
                  <p>
                    <strong>Built using: </strong>
                    {technology}
                  </p>
                </div>
              )}

              {website && (
                <div className="col">
                  <p>
                    <strong>Website: </strong>
                    <a href={`https://${website}`} target="_blank">
                      {website}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </TechUsed>
        ) : null}

        <GeneralContent content={richDescription} />
        <Gallery projectImages={projectImages} />
        <ProjectNavigation next={nextProject} prefix="projects" />
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    project: contentfulProjects(slug: { eq: $slug }) {
      name
      excerpt
      technology
      website
      images {
        description
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP]
          quality: 90
        )
      }
      richDescription {
        raw
      }
    }
  }
`;
export default projectTemplate;
