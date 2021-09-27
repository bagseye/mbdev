import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const DevelopmentContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #000;

  .project__content {
    grid-column: 1 / 7;

    @media (min-width: 768px) {
      grid-column: 1 / 5;
    }
  }

  .project__containter {
    position: relative;
    width: 100%;
    max-width: 1580px;
    margin: 0 auto;
    padding: 0 var(--gridGap);
  }

  h2 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;
  }

  .project__link {
    font-weight: 700;
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
  }

  .project__img {
    height: 100%;
    > div {
      padding-top: 0 !important;
    }

    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: calc((3 / 4) * 100%);
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;

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
  const { name, slug, images, excerpt } = project;
  const projectImg = getImage(images[0]);
  const projectImgAlt = images[0].description;

  return (
    <DevelopmentContainer>
      <ProjectImage>
        <Link to={base ? `${base}/${slug}` : `${slug}`}>
          <GatsbyImage
            loading="lazy"
            image={projectImg}
            alt={projectImgAlt ? projectImgAlt : "Project Image"}
            className="project__img"
          />
        </Link>
      </ProjectImage>

      <div className="project__containter">
        <div className="container-grid">
          <div className="project__content">
            <h2>{excerpt}</h2>
            <Link
              className="project__link"
              to={base ? `${base}/${slug}` : `${slug}`}
            >
              View the project
            </Link>
          </div>
        </div>
      </div>
    </DevelopmentContainer>
  );
};

export default Development;
