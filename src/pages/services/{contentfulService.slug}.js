import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/SEO";
import Layout from "../../components/Layout";
import { GeneralContentStyles } from "../../components/GeneralContent/GeneralContentStyles";
import CMSContact from "../../components/CMS/CMSContact/CMSContact";
import CMSBanner from "../../components/CMS/CMSBanner/CMSBanner";
import RichText from "../../components/RichText";
import Button from "../../components/Button/Button";

const ServicePage = ({ data }) => {
  const {
    bannerImage,
    title,
    excerpt,
    contentAreaOne,
    contentAreaTwo,
    contentAreaThree,
    includeContactCta,
  } = data.servicePage;

  return (
    <>
      <Seo title={title} description={excerpt} />
      <Layout>
        <CMSBanner bannerContent={title} image={bannerImage} />
        <GeneralContentStyles>
          {contentAreaOne && (
            <>
              <div className="container container-grid sectiongap">
                <div className="col">
                  <RichText richText={contentAreaOne} />
                </div>
              </div>
            </>
          )}
          {contentAreaTwo && (
            <>
              <hr />
              <div className="container container-grid sectiongap">
                <div className="col">
                  <RichText richText={contentAreaTwo} />
                </div>
              </div>
            </>
          )}
          {contentAreaThree && (
            <>
              <hr />
              <div className="container container-grid sectiongap">
                <div className="col">
                  <div className="col">
                    <RichText richText={contentAreaThree} />
                  </div>
                  <Button to="/content" text="Get in Touch" />
                </div>
              </div>
            </>
          )}
        </GeneralContentStyles>
        {includeContactCta && <CMSContact />}
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
      includeContactCta
    }
  }
`;
export default ServicePage;
