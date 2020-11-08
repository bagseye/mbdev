import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const DevelopmentContainer = styled.section`
  border-top: var(--borderSmall) solid #fff;
  padding-top: 10px;
  grid-column: 1 / 7;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: var(--gridGap);
    margin-bottom: 40px;
    height: 100%;
  }

  h2 {
    font-size: var(--paragraph);
    line-height: var(--paragraphLineHeight);
    margin-top: 0;
    grid-column: 1 / 4;
    letter-spacing: -0.5px;
  }

  @media (min-width: 414px) {
    margin-bottom: 60px;
  }

  @media (min-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }

    h2 {
      grid-column: 1 / 2;
    }

    &:nth-child(odd) {
      grid-column: 1 / 4;
    }

    &:nth-child(even) {
      grid-column: 4 / 7;
    }
  }

  @media (min-width: 834px) {
    margin-bottom: var(--margins);
  }
`;

const Button = styled(Link)`
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  text-decoration: underline rgba(255, 255, 255, 1);
  transition: text-decoration 0.5s ease;

  &:hover,
  &:active {
    text-decoration: underline rgba(255, 255, 255, 0);
  }
`;

const ProjectImage = styled.div`
  margin-top: auto;
  grid-column: 1 / 7;
  position: relative;

  &::before {
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: calc((3 / 4) * 100%);
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }
`;

const Excerpt = styled.div`
  grid-column: 4 / 7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    font-size: var(--paragraph);
    line-height: var(--paragraphLineHeight);
    margin: 0;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    grid-column: 2 / 4;
  }

  @media (min-width: 834px) {
    grid-column: 2 / 4;
  }
`;

const Image = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Development = ({ project, noPrefix }) => {
  console.log(noPrefix);
  const { name, excerpt, slug, images } = project;
  const projectImg = images[0].fluid;

  return (
    <DevelopmentContainer>
      <div className="project-grid">
        <h2>{name}</h2>
        <Excerpt>
          <p>{excerpt}</p>
          <Button
            className="link__std"
            to={noPrefix ? `${slug}` : `projects/${slug}`}
          >
            View Project
          </Button>
        </Excerpt>
      </div>
      <ProjectImage>
        <Image fluid={projectImg} />
      </ProjectImage>
    </DevelopmentContainer>
  );
};

export default Development;
