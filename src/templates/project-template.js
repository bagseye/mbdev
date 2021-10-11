import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";
import BannerStandard from "../components/BannerStandard/BannerStandard";
import ProjectNavigation from "../components/ProjectNavigation";

const projectTemplate = ({ data, pageContext }) => {
  const nextProject = pageContext.next;

  const {
    name,
    excerpt,
    richDescription,
    richDescription: { raw },
    images,
    technology,
    website,
  } = data.project;

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

  const [mainImage, ...projectImages] = images;

  return (
    <>
      <SEO title={name} description={excerpt} />
      <Layout>
        <BannerStandard title={excerpt} />
        <GeneralContent title="Project Details" content={richDescription} />
        <Gallery projectImages={projectImages} />
        <ProjectNavigation next={nextProject} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    project: contentfulProjects(slug: { eq: $slug }) {
      name
      excerpt
      technology
      website
      images {
        description
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP]
          quality: 90
        )
      }
      richDescription {
        raw
      }
    }
  }
`;
export default projectTemplate;
