import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import CallToAction from "../components/CallToAction/CallToAction";

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
  const { title, excerpt, content } = data.service;
  return (
    <>
      <SEO title={title} description={excerpt} />
      <Layout>
        <div className="container__body">
          <GeneralContent title={title} content={content} />
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
    }
  }
`;

export default serviceTemplate;
