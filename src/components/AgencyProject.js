import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Banner from "./Banner/Banner";
import Grid from "./Grid";
import ProjectInfo from "./ProjectInfo";
import ProjectContent from "./ProjectContent";
import Gallery from "./Gallery";
import FadeLink from "./FadeLink";
import { VscArrowLeft as Arrow } from "react-icons/vsc";

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const AgencyProject = ({ agencyData }) => {
  const {
    name,
    richDescription: { json },
    images,
    technology,
    website,
    excerpt,
  } = agencyData;

  const [mainImage, ...projectImages] = images;

  return (
    <>
      <Banner description={name} excerpt={excerpt} />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.35, delay: 1.5 }}
      >
        <Gallery mainImage={mainImage} />
      </motion.div>

      <BodyContainer>
        <Grid>
          <ProjectInfo technology={technology} website={website} />
          <ProjectContent json={json} />
          <Gallery projectImages={projectImages} />
        </Grid>
        <FadeLink linkClass="link__arrow" linkTo="/dashboard/agency">
          <Arrow className="arrow" /> Back to all projects
        </FadeLink>
      </BodyContainer>
    </>
  );
};

export default AgencyProject;
