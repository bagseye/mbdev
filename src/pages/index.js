import React from "react";
import SEO from "../components/SEO";
import ProjectsFeatured from "../components/Projects/ProjectsFeatured";
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
          scrollerText="Scroll"
          ctaOneText="Current Services"
          ctaOneLink="/services"
          ctaTwoText="All Projects"
          ctaTwoLink="/projects"
        />

        <ProjectsFeatured />
        <ContactMethods />
        <Posts />
      </Layout>
    </>
  );
};

export default Index;
