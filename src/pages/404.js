import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { Link } from "gatsby";
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

  > *:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const error = () => (
  <>
    <SEO title="Error" />
    <Layout>
      <Banner heading="Page not found" />
      <BodyContainer>
        <div className="container-grid">
          <MainContent>
            <p>This page has moved or no longer exists.</p>
            <p>
              Please choose another option from the menu above, or to return
              home, press the button below.
            </p>
            <Link className="link__std" to="/">
              Return Home
            </Link>
          </MainContent>
        </div>
      </BodyContainer>
    </Layout>
  </>
);

export default error;
