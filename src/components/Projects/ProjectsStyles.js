import styled from "styled-components";

export const ProjectGlobalStyles = styled.section`
  position: relative;
  background-color: #000;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--boxShadow);
  padding-left: var(--gridGap);
  padding-right: var(--gridGap);

  .content__area {
    position: relative;
    z-index: 1;
    max-width: calc(500px - var(--gridGap));

    @media (min-width: 768px) {
      max-width: calc(750px - var(--gridGap));
    }
  }

  .project__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;

    .gatsby-image-wrapper {
      height: 100%;
    }

    img {
      object-fit: cover;
      object-position: center;
    }
  }
`;
