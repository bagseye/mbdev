import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../../components/SEO";
import Layout from "../../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GeneralContentStyles } from "../../components/GeneralContent/GeneralContentStyles";
import CMSContact from "../../components/CMS/CMSContact/CMSContact";
import CMSBanner from "../../components/CMS/CMSBanner/CMSBanner";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ServicePage = ({ data }) => {
  const {
    bannerImage,
    title,
    excerpt,
    contentAreaOne,
    contentAreaTwo,
    contentAreaThree,
    contentAreaThreeImage,
    contactBlockTitle,
    contactBlockContent: { contactBlockContent },
    contactBlockBackground,
  } = data.servicePage;

  const contThreeMedia = getImage(contentAreaThreeImage);

  return (
    <>
      <Seo title={title} description={excerpt} />
      <Layout>
        <CMSBanner bannerContent={title} image={bannerImage} />
        <GeneralContentStyles>
          {contentAreaOne && (
            <div
              style={{ marginTop: "50px", marginBottom: "50px" }}
              className="container container-grid"
            >
              <div className="col">{renderRichText(contentAreaOne)}</div>
            </div>
          )}
          {contentAreaTwo && (
            <div
              style={{ marginTop: "50px", marginBottom: "50px" }}
              className="container container-grid"
            >
              <div className="col">{renderRichText(contentAreaTwo)}</div>
            </div>
          )}
          {contentAreaThree && (
            <div className="container container-grid splitstyle">
              <div className="col">
                {renderRichText(contentAreaThree)}
                <Link className="btn" to="/content">
                  Get in touch
                </Link>
              </div>
              {contThreeMedia && (
                <div className="col">
                  <GatsbyImage image={contThreeMedia} />
                </div>
              )}
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

export const data = graphql`
  query ServicePageQuery($id: String) {
    servicePage: contentfulService(id: { eq: $id }) {
      slug
      title
      excerpt
      bannerImage {
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP], quality: 90)
      }
      contentAreaOne {
        raw
      }
      contentAreaTwo {
        raw
      }
      contentAreaThree {
        raw
      }
      contentAreaThreeImage {
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP], quality: 90)
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
export default ServicePage;
