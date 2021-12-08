import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import CMSContact from "../components/CMS/CMSContact/CMSContact";
import CMSBanner from "../components/CMS/CMSBanner/CMSBanner";

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
  const {
    bannerImage,
    title,
    excerpt,
    contentAreaOne,
    contentAreaTwo,
    contentAreaThree,
    contactBlockTitle,
    contactBlockContent: { contactBlockContent },
    contactBlockBackground,
  } = data.service;

  return (
    <>
      <SEO title={title} description={excerpt} />
      <Layout>
        <CMSBanner bannerContent={title} image={bannerImage} />
        <GeneralContentStyles>
          {contentAreaOne && (
            <div
              style={{ marginTop: "50px", marginBottom: "50px" }}
              className="container container-grid"
            >
              <div className="col">
                {renderRichText(contentAreaOne, options)}
              </div>
            </div>
          )}
          {contentAreaTwo && (
            <div
              style={{ marginTop: "50px", marginBottom: "50px" }}
              className="container container-grid"
            >
              <div className="col">
                {renderRichText(contentAreaTwo, options)}
              </div>
            </div>
          )}
          {contentAreaThree && (
            <div
              style={{ marginTop: "50px", marginBottom: "50px" }}
              className="container container-grid"
            >
              <div className="col">
                {renderRichText(contentAreaThree, options)}
              </div>
            </div>
          )}
        </GeneralContentStyles>
        {contactBlockTitle && contactBlockContent && (
          <CMSContact
            title={contactBlockTitle}
            content={contactBlockContent}
            media={contactBlockBackground}
          />
        )}
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    service: contentfulService(slug: { eq: $slug }) {
      bannerImage {
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP], quality: 90)
      }
      title
      excerpt
      contentAreaOne {
        raw
      }
      contentAreaTwo {
        raw
      }
      contentAreaThree {
        raw
      }
      contactBlockTitle
      contactBlockContent {
        contactBlockContent
      }
      contactBlockBackground {
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP], quality: 90)
      }
    }
  }
`;

export default serviceTemplate;
