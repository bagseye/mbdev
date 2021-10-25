import React from "react";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";
import ProjectNavigation from "./ProjectNavigation";
import Banner from "./Banner/Banner";

const Agency = ({ data, next }) => {
  let nextItem = next !== undefined ? next.node : null;

  console.log(nextItem);
  const {
    name,
    excerpt,
    richDescription,
    richDescription: { raw },
    images,
  } = data;

  const [mainImage, ...projectImages] = images;

  return (
    <>
      <SEO title={name} description={excerpt} noIndex />
      <Layout>
        <Banner
          bannerContent={excerpt}
          image={mainImage}
          scrollerText="Scroll to view this project"
        />
        <GeneralContent content={richDescription} />
        <Gallery projectImages={projectImages} />
        <ProjectNavigation next={nextItem} prefix="dashboard" />
      </Layout>
    </>
  );
};

export default Agency;
