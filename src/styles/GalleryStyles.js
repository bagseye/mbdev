import styled from 'styled-components';

export const GalleryItem = styled.div`
  margin: 0 0 var(--margins) 0;
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 var(--gridGap);

  h3,
  figure {
    font-size: 11px;
    line-height: 1.4;
    margin: 0 0 var(--margins) 0;
    color: #aaa;
  }

  h3 {
    font-weight: 300;
    grid-column: 1 / 4;
  }

  figure {
    grid-column: 4 / 7;
    font-weight: 500;
    text-align: right;
  }

  .feature,
  .standard {
    grid-column: 1 / 7;
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    grid-template-columns: 1fr 1fr 1fr;

    h3 {
      grid-column: 1 / 2;
    }

    figure {
      grid-column: 3 / 4;
    }

    .standard {
      grid-column: 1 / 4;
    }
  }

  @media (min-width: 1024px) {
    grid-column: 1 / 7;

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    h3 {
      grid-column: 5 / 6;
    }

    figure {
      grid-column: 6 / 7;
    }

    .standard {
      grid-column: 1 / 5;
      grid-row: 1 / 2;
    }

    h3,
    figure {
      font-size: 12px;
    }
  }

  @media (min-width: 1440px) {
    h3,
    figure {
      font-size: 14px;
    }
  }
`;
