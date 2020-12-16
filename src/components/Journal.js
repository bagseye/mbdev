import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import JournalItem from "./JournalItem";

const JournalStyles = styled.section`
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 var(--gridGap);

  @media (min-width: 768px) {
    padding-right: 0;
  }
`;

const TitleArea = styled.div`
  grid-column: 1 / 7;
  margin-bottom: var(--margins);
`;

const Journal = () => (
  <JournalStyles>
    <TitleArea>
      <Heading content="Recent Journal Entries" />
    </TitleArea>
    <JournalItem className="item" />
  </JournalStyles>
);

export default Journal;
