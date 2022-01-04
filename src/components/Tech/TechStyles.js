import styled from "styled-components";

export const TechListGlobalStyles = styled.section`
  .container {
    display: flex;
    align-items: center;
    gap: calc(var(--gridGap) * 2);

    .content__area {
      .leadin {
        margin-bottom: var(--gridGap);
      }
    }
  }
`;

export const TechItemGlobalStyles = styled.aside`
  max-width: 275px;
`;
