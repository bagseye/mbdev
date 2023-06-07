import React from "react";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";
import ProjectNavigation from "./ProjectNavigation";
import Banner from "./Banner/Banner";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const TechUsed = styled.div`
  margin-top: calc(var(--gridGap) * 3);
  margin-bottom: calc(var(--gridGap) * 3);

  .col {
    &:nth-child(1) {
      grid-column: 1 / 7;

      @media (min-width: 834px) {
        grid-column: 1 / 3;
      }
    }

    &:nth-child(2) {
      grid-column: 1 / 7;

      @media (min-width: 834px) {
        grid-column: 3 / 5;
      }
    }
  }
`;

const Agency = ({ data, next }) => {
  let nextItem = next !== undefined ? next.node : null;

  const {
    name,
    excerpt,
    website,
    technology,
    richDescription,
    richDescription: { raw },
    images,
  } = data;

  // let [mainImage, ...projectImages] = images;

  // mainImage = getImage(mainImage);

  return (
    null
    // <>
    //   <SEO title={name} description={excerpt} noIndex />
    //   <Layout>
    //     <Banner
    //       title={name}
    //       subTitle={excerpt}
    //       scrollerText="View this project"
    //     >
    //       <GatsbyImage className="banner__bg" image={mainImage} />
    //     </Banner>
    //     <TechUsed>
    //       <div className="container container-grid">
    //         {technology && (
    //           <div className="col">
    //             <p>
    //               <strong>Built using: </strong>
    //               {technology}
    //             </p>
    //           </div>
    //         )}

    //         {website && (
    //           <div className="col">
    //             <p>
    //               <strong>Website: </strong>
    //               <a href={`https://${website}`} target="_blank">
    //                 {website}
    //               </a>
    //             </p>
    //           </div>
    //         )}
    //       </div>
    //     </TechUsed>
    //     <GeneralContent content={richDescription} />
    //     <Gallery projectImages={projectImages} />
    //     <ProjectNavigation next={nextItem} prefix="dashboard" />
    //   </Layout>
    // </>
  );
};

export default Agency;
