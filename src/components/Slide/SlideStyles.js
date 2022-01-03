import styled from "styled-components";

export const SlideGlobalStyles = styled.section`
  padding-left: var(--gridGap);
  padding-right: var(--gridGap);
  position: relative;

  > .container {
    position: relative;
    z-index: 1;
  }

  .content__area {
    > h2 {
      font-size: var(--titleLarge);
      line-height: var(--titleLargeLineHeight);
      letter-spacing: var(--titleLargeLetterSpacing);
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
