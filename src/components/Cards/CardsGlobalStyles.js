import styled from "styled-components";
import { Link } from "gatsby";

export const CardContainerGlobalStyles = styled.section`
  display: flex;
  gap: calc(var(--gridGap) * 2) 0;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: calc(var(--gridGap) * 2);
  }
`;

export const CardGlobalStyles = styled(Link)`
  position: relative;
  background-color: #000;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.4);
  width: 100%;
  text-decoration: none;
  transition: background-color 0.5s ease;

  @media (min-width: 768px) {
    width: calc(50% - var(--gridGap));
  }

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 100%;
  }

  &:hover {
    background-color: var(--accent);
    .img__area {
      opacity: 0;
    }

    img {
      transform: scale(1.25);
    }
  }

  .route {
    position: absolute;
    left: var(--gridGap);
    top: var(--gridGap);
    margin: 0;
  }

  .content__area {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
    padding: var(--gridGap);

    h4 {
      color: #fff;
      margin-bottom: 0;
    }
  }

  .img__area {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    transition: opacity 0.5s ease;
    overflow: hidden;

    img,
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }

    img {
      transition: transform 0.5s ease;
    }
  }
`;
