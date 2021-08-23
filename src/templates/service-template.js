import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import CallToAction from "../components/CallToAction/CallToAction";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";

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
        <div className="container__body">
          <GeneralContent title={title} content={content} />
          <div className="standard__images">
            <Gallery projectImages={images} />
          </div>
          <CallToAction
            message="Looking to start a project?"
            subMessage="Get in touch and request a quote for your next project"
          />
        </div>
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
