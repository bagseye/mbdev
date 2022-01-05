import styled from "styled-components";

export const TechListGlobalStyles = styled.section`
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: calc(var(--gridGap) * 2);

    .content__area {
      .as__h1 {
        margin-bottom: calc(var(--gridGap) * 2);
      }
    }
  }
`;

export const TechItemGlobalStyles = styled.aside`
  height: auto;
  max-height: 45px;
  max-width: 135px;

  img {
    max-height: 45px;
  }

  @media (min-width: 768px) {
    max-height: 60px;
    max-width: 150px;

    img {
      max-height: 60px;
    }
  }

  @media (min-width: 834px) {
    max-height: 75px;
    max-width: 185px;

    img {
      max-height: 75px;
    }
  }
`;
