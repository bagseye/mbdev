import React from "react";
import SEO from "../components/SEO";
import FeatureDevs from "../components/FeatureDevelopments";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";
import Posts from "../components/Posts/Posts";
import Banner from "../components/Banner/Banner";

const Index = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Banner
          title="Bespoke web design & development in Inverness."
          subTitle="Creating modern, user-friendly experiences using Wordpress and GatsbyJS."
          scrollerText="Find out more"
          ctaOneText="Discover Services"
          ctaOneLink="/services"
          ctaTwoText="View Projects"
          ctaTwoLink="/projects"
        />

        <FeatureDevs />
        <ContactMethods />
        <Posts />
      </Layout>
    </>
  );
};

export default Index;
