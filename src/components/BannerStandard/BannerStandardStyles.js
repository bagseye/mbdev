import styled from "styled-components";

export const BannerGridColumn = styled.section`
  grid-column: 1 / 7;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

export const BannerStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #000;

  .container-grid {
    position: relative;
    z-index: 1;
    max-width: 1580px;
    margin: 0 auto;
    padding: 0 var(--gridGap);
    height: 100%;
  }

  .banner__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }

  h1 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;
  }

  .scroll__to {
    position: absolute;
    bottom: calc(var(--gridGap) * 2);
    left: var(--gridGap);
    font-size: 1rem;
    font-weight: 300;
  }
`;
