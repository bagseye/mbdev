import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { VscArrowRight as Arrow } from "react-icons/vsc";

const DevelopmentContainer = styled.section`
  margin-bottom: var(--gridGap);
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;

  @media (min-width: 768px) {
    flex: 0 0 calc(50% - calc(var(--gridGap) / 2));
    margin-bottom: 0;
  }

  .link__arrow {
    margin-top: auto;
  }

  h2 {
    font-size: var(--h2);
    line-height: var(--h2LineHeight);
    margin-top: 0;
    letter-spacing: var(--h2LetterSpacing);

    .arrow {
      font-size: 16px;
      margin-left: 6px;
    }
  }

  .project__img {
    margin-bottom: var(--gridGap);
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
  const { name, slug, images } = project;
  const projectImg = getImage(images[0]);
  const projectImgAlt = images[0].description;

  return (
    <DevelopmentContainer>
      <ProjectImage>
        <Link to={base ? `${base}/${slug}` : `${slug}`}>
          <span className="sr-only">{name}</span>
          <GatsbyImage
            loading="lazy"
            image={projectImg}
            alt={projectImgAlt ? projectImgAlt : "Project Image"}
            className="project__img"
          />
          <h2 className="link__arrow">
            {name} <Arrow className="arrow" />
          </h2>
        </Link>
      </ProjectImage>
    </DevelopmentContainer>
  );
};

export default Development;
