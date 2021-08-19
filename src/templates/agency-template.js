import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery";

import GeneralContent from "../components/GeneralContent/GeneralContent";

const ViewWebsite = styled.div`
  padding: 0 var(--gridGap);
  margin-top: calc(var(--gridGap) * 2);
  margin-bottom: calc(var(--gridGap) * 2);
  display: flex;
  justify-content: center;
`;

const agencyTemplate = ({ data }) => {
  const {
    name,
    excerpt,
    richDescription,
    richDescription: { raw },
    images,
    technology,
    website,
  } = data.agency;

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
      <>
        <div className="container__body">
          <GeneralContent title={name} />
          <Gallery mainImage={mainImage} />

          <GeneralContent title="Project Details" content={richDescription} />
          <div className="standard__images">
            <Gallery projectImages={projectImages} />
          </div>
          <ViewWebsite>
            <Link className="btn" to={website}>
              View the website
            </Link>
          </ViewWebsite>
        </div>
      </>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    agency: contentfulAgency(slug: { eq: $slug }) {
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
export default agencyTemplate;
