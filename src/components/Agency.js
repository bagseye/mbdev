import React from "react";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";
import ProjectNavigation from "./ProjectNavigation";
import Banner from "./Banner/Banner";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Agency = ({ data, next }) => {
  let nextItem = next !== undefined ? next.node : null;

  const {
    name,
    excerpt,
    richDescription,
    richDescription: { raw },
    images,
  } = data;

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
          <GatsbyImage className="banner__bg" image={mainImage} />
        </Banner>
        <GeneralContent content={richDescription} />
        <Gallery projectImages={projectImages} />
        <ProjectNavigation next={nextItem} prefix="dashboard" />
      </Layout>
    </>
  );
};

export default Agency;
