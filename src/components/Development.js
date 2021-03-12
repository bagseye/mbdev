import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { VscArrowRight as Arrow } from "react-icons/vsc";
import FadeLink from "./FadeLink";

const DevelopmentContainer = styled.section`
  margin-bottom: var(--gridGap);
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;

  @media (min-width: 768px) {
    flex: 0 0 calc(50% - var(--gridGap));
    margin-bottom: 0;
  }

  .project-grid {
    gap: 0 var(--gridGap);
    margin-bottom: var(--gridGap);
  }

  .excerpt {
    display: flex;
    flex-wrap: wrap;

    > p {
      margin: 0;
      margin-bottom: var(--gridGap);
      width: 100%;
    }

    .link__arrow {
      margin-top: auto;
    }
  }

  h2 {
    font-size: var(--h2);
    line-height: var(--h2LineHeight);
    margin-top: 0;
    letter-spacing: var(--h2LetterSpacing);
    margin-bottom: var(--gridGap);
  }

  @media (min-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const ProjectImage = styled.div`
  margin-top: auto;
  position: relative;

  img {
    transition: transform 0.5s ease, opacity 500ms ease 0s !important;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const Development = ({ project, noPrefix, base }) => {
  const { name, excerpt, slug, images } = project;
  const projectImg = getImage(images[0]);

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
          <GatsbyImage image={projectImg} />
        </FadeLink>
      </ProjectImage>
    </DevelopmentContainer>
  );
};

export default Development;
