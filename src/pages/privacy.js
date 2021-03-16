import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Banner from "../components/Banner/Banner";

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const MainContent = styled.div`
  border-top: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  padding-top: 25px;
  grid-column: 1 / 7;
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  color: #aaa;

  > *:first-child {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const privacyPage = () => (
  <>
    <SEO title="Privacy & Your Data" />
    <Banner heading="Privacy & your data" />
    <BodyContainer>
      <div className="container-grid">
        <MainContent>
          <p>
            This site does not use anything like Google Analytics, or other data
            miners that look to steal every last bit of your soul and sell it
            off to the highest bidder. I don't even care what traffic I get.
          </p>
          <p>
            Your email address will never be sent on to a marketing company and
            will only be used to reply to correspondence.
          </p>
        </MainContent>
      </div>
    </BodyContainer>
  </>
);

export default privacyPage;
