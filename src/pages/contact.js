import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/Contact/Contact";

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const Contact = () => (
  <>
    <SEO title="Contact the developer" />
    <Layout>
      <Banner heading="Contact the developer" />
      <BodyContainer>
        <ContactForm />
      </BodyContainer>
    </Layout>
  </>
);

export default Contact;
