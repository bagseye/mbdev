import React from "react";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";
import BannerStandard from "./BannerStandard/BannerStandard";
import ProjectNavigation from "./ProjectNavigation";

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
        <BannerStandard title={excerpt} image={mainImage} />
        <GeneralContent content={richDescription} />
        <Gallery projectImages={projectImages} />
        <ProjectNavigation next={nextItem} prefix="dashboard" />
      </Layout>
    </>
  );
};

export default Agency;
