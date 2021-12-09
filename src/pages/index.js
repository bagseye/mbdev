import React from "react";
import SEO from "../components/SEO";
import Banner from "../components/Banner/Banner";
import FeatureDevs from "../components/FeatureDevelopments";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";
import Posts from "../components/Posts/Posts";

const Index = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Banner
        bannerContent="Bespoke web design & development in Inverness. Creating modern,
          user-friendly experiences using Wordpress."
        scrollerText="Scroll for recent projects"
        ctaOneText="Get in touch"
        ctaOneLink="contact"
        ctaTwoText="View projects"
        ctaTwoLink="projects"
      />
      <FeatureDevs />
      <ContactMethods />
      <Posts />
    </Layout>
  </>
);

export default Index;
