import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { VscArrowRight as Arrow } from "react-icons/vsc";
import FadeLink from "./FadeLink";

const DevelopmentContainer = styled.section`
  grid-column: 1 / 7;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0 var(--gridGap);
    margin-bottom: 50px;
  }

  .excerpt {
    grid-column: 1 / 7;
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
  }

  h2 {
    font-size: var(--h2);
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

  img {
    transition: transform 0.5s ease, opacity 500ms ease 0s !important;
  }

  &::before,
  &::after {
    content: "";
  }

  &::before {
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: calc((3 / 4) * 100%);
  }

  &::after {
    display: table;
    clear: both;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }
`;

const Development = ({ project, noPrefix, base }) => {
  const { name, excerpt, slug, images } = project;
  const projectImg = images[0].fluid;

  return (
    <DevelopmentContainer>
      <div className="project-grid">
        <h2>
          <FadeLink linkTo={base ? `${base}/${slug}` : `${slug}`}>
            {name}
          </FadeLink>
        </h2>
        <div className="excerpt">
          <p>{excerpt}</p>
          <FadeLink
            linkClass="link__arrow"
            linkTo={base ? `${base}/${slug}` : `${slug}`}
          >
            View Project <Arrow className="arrow" />
          </FadeLink>
        </div>
      </div>
      <ProjectImage>
        <FadeLink linkTo={base ? `${base}/${slug}` : `${slug}`}>
          <Img fluid={projectImg} />
        </FadeLink>
      </ProjectImage>
    </DevelopmentContainer>
  );
};

export default Development;
