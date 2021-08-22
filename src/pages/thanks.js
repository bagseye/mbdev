import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import { VscArrowLeft as Arrow } from "react-icons/vsc";
import Layout from "../components/Layout";

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const Thanks = () => {
  return (
    <Layout>
      <Banner heading="Thank you" />
      <BodyContainer>
        <Link className="link__arrow" to="/">
          <Arrow className="arrow" /> Return to home
        </Link>
      </BodyContainer>
    </Layout>
  );
};

export default Thanks;
