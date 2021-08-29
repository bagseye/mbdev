import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";

const ViewWebsite = styled.div`
  padding: 0 var(--gridGap);
  margin-top: calc(var(--gridGap) * 2);
  margin-bottom: calc(var(--gridGap) * 2);
  display: flex;
  justify-content: center;
`;

const Agency = ({ data }) => {
  const {
    name,
    excerpt,
    richDescription,
    richDescription: { raw },
    images,
    technology,
    website,
  } = data;

  const [mainImage, ...projectImages] = images;

  return (
    <>
      <SEO title={name} description={excerpt} noIndex />
      <Layout>
        <div className="container__body">
          <GeneralContent title={name} />
          <Gallery mainImage={mainImage} />

          <GeneralContent title="Project Details" content={richDescription} />
          <div className="standard__images">
            <Gallery projectImages={projectImages} />
          </div>
          <ViewWebsite>
            <a className="btn" href={website} target="_blank">
              View the website
            </a>
          </ViewWebsite>
        </div>
      </Layout>
    </>
  );
};

export default Agency;
