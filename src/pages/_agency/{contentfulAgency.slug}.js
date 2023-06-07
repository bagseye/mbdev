import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Gallery from "../../components/Gallery";
import GeneralContent from "../../components/GeneralContent/GeneralContent";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner/Banner";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TechUsed = styled.div`
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

const agencyTemplate = ({ data }) => {
  const {
    name,
    excerpt,
    richDescription,
    // richDescription: { raw },
    images,
    technology,
    website,
  } = data.agencyPage;

  let [mainImage, ...projectImages] = images;

  mainImage = getImage(mainImage);

  return (
    <>
      <SEO title={name} description={excerpt} noIndex />
      <Layout>
        <Banner
          title={name}
          subTitle={excerpt}
          scrollerText="View this project"
        >
          <GatsbyImage
            className="banner__bg"
            image={mainImage}
            alt="Project Image"
          />
        </Banner>
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
      </Layout>
    </>
  );
};

export const data = graphql`
  query AgencyPageQuery($id: String) {
    agencyPage: contentfulAgency(id: { eq: $id }) {
      name
      excerpt
      technology
      website
      images {
        description
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
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

export default agencyTemplate;
