import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";

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

const serviceTemplate = ({ data }) => {
  const { title, excerpt, content, images } = data.service;

  return (
    <>
      <SEO title={title} description={excerpt} />
      <Layout>
        <GeneralContentStyles>
          <div
            style={{ paddingTop: "150px" }}
            className="container container-grid"
          >
            <div className="col">
              <h1>{title}</h1>
              {renderRichText(content, options)}
            </div>
          </div>
        </GeneralContentStyles>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    service: contentfulService(slug: { eq: $slug }) {
      title
      excerpt
      content {
        raw
      }
      images {
        description
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP]
          quality: 90
        )
      }
    }
  }
`;

export default serviceTemplate;
