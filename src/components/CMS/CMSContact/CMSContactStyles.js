import styled from "styled-components";

export const CMSContactStyles = styled.section`
  background-color: #282828;
  margin-left: auto;
  margin-right: auto;
  padding: calc(var(--sectionGap)) var(--gridGap);
  position: relative;
  overflow: hidden;

  .cont {
    position: relative;
    z-index: 2;
    max-width: 500px;
    > * {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const CMSContactMediaStyles = styled.div`
  position: relative;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((6 / 16) * 100%);
  }

  .media {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .gatsby-image-wrapper {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
