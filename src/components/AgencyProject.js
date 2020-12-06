import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';
import Grid from './Grid';
import ProjectInfo from './ProjectInfo';
import ProjectContent from './ProjectContent';
import Gallery from './Gallery';

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const AgencyProject = ({ agencyData }) => {
  console.log(agencyData);

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
      <Hero>
        <Banner description={name} excerpt={excerpt} />
      </Hero>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1.35, delay: 1.5 }}
      >
        <Gallery mainImage={mainImage} />
      </motion.div>

      <BodyContainer>
        <Grid>
          <ProjectInfo technology={technology} website={website} />
          <ProjectContent json={json} />
          <Gallery projectImages={projectImages} />
        </Grid>
      </BodyContainer>
    </>
  );
};

export default AgencyProject;
