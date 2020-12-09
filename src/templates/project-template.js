import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner/Banner';
import Grid from '../components/Grid';
import Gallery from '../components/Gallery';
import ProjectInfo from '../components/ProjectInfo';
import ProjectContent from '../components/ProjectContent';

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const projectTemplate = ({ data }) => {
  const {
    name,
    excerpt,
    richDescription: { json },
    images,
    technology,
    website,
  } = data.project;

  const options = {
    // Pass in the node and dril down to the required data
    renderNode: {
      // Render the contentful rich content image
      'embedded-asset-block': (node) => (
        <div className="content-image">
          <img
            src={node.data.target.fields.file['en-US'].url}
            alt={node.data.target.fields.title['en-US']}
          />
        </div>
      ),
    },
  };

  const [mainImage, ...projectImages] = images;

  return (
    <Layout>
      <SEO title={name} description={excerpt} />
      <Banner description={name} excerpt={excerpt} />
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
          <ProjectContent json={json} options={options} />
          <Gallery projectImages={projectImages} />
        </Grid>
      </BodyContainer>
    </Layout>
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
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      richDescription {
        json
      }
    }
  }
`;
export default projectTemplate;
