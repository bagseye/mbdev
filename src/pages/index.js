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
      <Banner />
      <FeatureDevs />
      <ContactMethods />
      <Posts />
    </Layout>
  </>
);

export default Index;
