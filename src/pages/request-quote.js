import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import QuoteForm from "../components/Quote/Quote";

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const Contact = () => (
  <>
    <SEO title="Request a quote" />
    <Layout>
      <Banner heading="Request a quote" />
      <BodyContainer>
        <QuoteForm />
      </BodyContainer>
    </Layout>
  </>
);

export default Contact;
