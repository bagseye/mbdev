import styled from "styled-components";

export const SlideGlobalStyles = styled.section`
  position: relative;

  > .container {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media(min-width:1280px) {
      flex-direction: row;
    }
  }

  .content__area {
    > h2 {
      font-size: var(--titleLarge);
      line-height: var(--titleLargeLineHeight);
      letter-spacing: var(--titleLargeLetterSpacing);
    }
  }

  .form__area {
    padding: calc(var(--gridGap) * 2) 0 0 0;
    flex-grow: 1;
    width: 100%;

    @media(min-width:1280px) {
      padding: 0 0 0 calc(var(--gridGap) * 2);
    }
  }

  .slide__bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.5;
  }
`;
