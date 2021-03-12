import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import SEO from "../components/SEO";
import FeatureDevs from "../components/FeatureDevelopments";
import Grid from "../components/Grid";
import ContactMethods from "../components/ContactMethods";
import { SplitContainerStyles } from "../styles/SiteStyles";
import FullWidthImage from "../components/FullWidthImage/FullWidthImage";

const Index = () => (
  <>
    <SEO title="Home" />
    <Banner />
    <About id="about" />
    <FullWidthImage />
    <FeatureDevs />
    <SplitContainerStyles>
      <Grid>
        <ContactMethods />
      </Grid>
    </SplitContainerStyles>
  </>
);

export default Index;
