import React from 'react';
import { graphql } from 'gatsby';

import Image from 'gatsby-image';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import Grid from '../components/Grid';

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const ProjectContent = styled.div`
  column-count: 2;
  column-gap: var(--gridGap);
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  grid-column: 1 / 7;
  padding-top: var(--margins);
  color: #aaa;

  > *:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const Border = styled.hr`
  height: var(--borderSmall);
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  grid-column: 1 / 7;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const Built = styled.div`
  grid-column: 1 / 3;
  font-size: var(--paragraph);
  font-weight: 700;

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Tech = styled.div`
  color: #aaa;
  grid-column: 3 / 5;
  font-size: var(--paragraph);

  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

const Website = styled.div`
  grid-column: 5 / 7;
  font-size: var(--paragraph);

  @media (min-width: 768px) {
    grid-column: 4 / 5;
  }
`;

const FeatureImage = styled.div`
  margin: var(--margins) 0 0 0;
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 var(--gridGap);

  h3,
  figure {
    font-size: 11px;
    line-height: 1.4;
    margin: 0 0 var(--margins) 0;
  }

  h3 {
    font-weight: 300;
    grid-column: 1 / 4;
  }

  figure {
    grid-column: 4 / 7;
    font-weight: 700;
    text-align: right;
  }

  .feature {
    grid-column: 1 / 7;
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    margin-bottom: 0;
    grid-template-columns: 1fr 1fr 1fr;

    h3 {
      grid-column: 1 / 2;
    }

    figure {
      grid-column: 3 / 4;
    }

    .feature {
      grid-column: 1 / 4;
    }
  }

  @media (min-width: 1024px) {
    grid-column: 1 / 7;

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    h3 {
      grid-column: 5 / 6;
    }

    figure {
      grid-column: 6 / 7;
    }

    .feature {
      grid-column: 1 / 5;
      grid-row: 1 / 2;
    }

    h3,
    figure {
      font-size: 12px;
    }
  }

  @media (min-width: 1440px) {
    h3,
    figure {
      font-size: 14px;
    }
  }
`;

const ImageArea = styled.div`
  margin: var(--margins) 0 0 0;
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 var(--gridGap);

  h3,
  figure {
    font-size: 11px;
    line-height: 1.4;
    margin: 0 0 var(--margins) 0;
  }

  h3 {
    font-weight: 300;
    grid-column: 1 / 4;
  }

  figure {
    grid-column: 4 / 7;
    font-weight: 700;
    text-align: right;
  }

  .gallery-item {
    grid-column: 1 / 7;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    grid-template-columns: 1fr 1fr 1fr;

    &.standard-image__0 {
      grid-column: 4 / 7;
    }

    &.standard-image__1 {
      grid-column: 1 / 4;
    }

    &.standard-image__2 {
      grid-column: 4 / 7;
    }

    h3 {
      grid-column: 1 / 2;
    }

    figure {
      grid-column: 3 / 4;
    }

    h3,
    figure {
      font-size: 12px;
    }

    .gallery-item {
      grid-column: 1 / 4;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;

    &.standard-image__0 {
      grid-column: 1 / 3;
    }

    &.standard-image__1 {
      grid-column: 3 / 5;
    }

    &.standard-image__2 {
      grid-column: 5 / 7;
    }

    h3 {
      grid-column: 1 / 2;
    }

    figure {
      grid-column: 2 / 3;
    }

    .gallery-item {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 1440px) {
    h3,
    figure {
      font-size: 14px;
    }
  }
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

  console.log(mainImage);

  return (
    <Layout>
      <SEO title={name} description={excerpt} />
      <Hero>
        <Banner description={name} />
      </Hero>
      <BodyContainer>
        <Grid>
          <Border />
          <Built>Built using</Built>
          <Tech>{technology}</Tech>
          <Website>
            <a
              href={website}
              className="link__std"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </Website>
          <ProjectContent>
            {documentToReactComponents(json, options)}
          </ProjectContent>
          <FeatureImage>
            <h3>{mainImage.description}</h3>
            <figure>Fig01</figure>
            <Image className="feature" fluid={mainImage.fluid} />
          </FeatureImage>
          {projectImages.map((item, index) => (
            <ImageArea className={`standard-image__${index}`}>
              <h3>{item.description}</h3>
              <figure>Fig0{index + 2}</figure>
              <Image className="gallery-item" key={index} fluid={item.fluid} />
            </ImageArea>
          ))}
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
