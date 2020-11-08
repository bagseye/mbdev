import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { VscArrowRight as Arrow } from 'react-icons/vsc';

const DevelopmentContainer = styled.section`
  border-top: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  padding-top: 25px;
  grid-column: 1 / 7;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0 var(--gridGap);
    margin-bottom: 50px;
    /* height: 100%; */
  }

  .excerpt {
    grid-column: 4 / 7;
    display: flex;
    flex-wrap: wrap;

    > p {
      font-size: var(--paragraph);
      line-height: var(--paragraphLineHeight);
      margin: 0;
      margin-bottom: 50px;
      width: 100%;
      color: #aaa;
    }

    .link__arrow {
      margin-top: auto;
    }

    @media (min-width: 768px) {
      grid-column: 2 / 4;
    }

    @media (min-width: 834px) {
      grid-column: 2 / 4;
    }
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

const ProjectImage = styled.div`
  margin-top: auto;
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

const Development = ({ project, noPrefix }) => {
  const { name, excerpt, slug, images } = project;
  const projectImg = images[0].fluid;

  return (
    <DevelopmentContainer>
      <div className="project-grid">
        <h2>{name}</h2>
        <div className="excerpt">
          <p>{excerpt}</p>
          <Link
            className="link__arrow"
            to={noPrefix ? `${slug}` : `projects/${slug}`}
          >
            View Project <Arrow className="arrow" />
          </Link>
        </div>
      </div>
      <ProjectImage>
        <Img fluid={projectImg} />
      </ProjectImage>
    </DevelopmentContainer>
  );
};

export default Development;
