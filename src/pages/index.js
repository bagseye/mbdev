import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import FeatureDevs from "../components/FeatureDevelopments";
import FullWidthImage from "../components/FullWidthImage/FullWidthImage";
import { SplitContainerStyles } from "../styles/GlobalStyles";
import ContactMethods from "../components/ContactMethods";

const Index = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Banner />
      <About id="about" />
      <FullWidthImage />
      <FeatureDevs />
      <SplitContainerStyles>
        <div className="container-grid">
          <ContactMethods />
        </div>
      </SplitContainerStyles>
    </Layout>
  </>
);

export default Index;
