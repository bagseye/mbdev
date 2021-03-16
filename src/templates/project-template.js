import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/SEO";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery";
import ProjectInfo from "../components/ProjectInfo";
import ProjectContent from "../components/ProjectContent";
import { VscArrowLeft as Arrow } from "react-icons/vsc";

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const projectTemplate = ({ data }) => {
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
      <Banner heading={name} excerpt={excerpt} />
      <div>
        <Gallery mainImage={mainImage} />
      </div>
      <BodyContainer>
        <div className="container-grid">
          <ProjectInfo technology={technology} website={website} />
          <ProjectContent raw={richDescription} options={options} />
          <Gallery projectImages={projectImages} />
        </div>
        <Link className="link__arrow" to="/projects">
          <Arrow className="arrow" /> Back to all projects
        </Link>
      </BodyContainer>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
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
