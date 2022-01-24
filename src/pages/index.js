import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";
import Posts from "../components/Posts/Posts";
import Banner from "../components/Banner/Banner";
import CardContainer from "../components/Cards/CardContainer";
import Card from "../components/Cards/Card";
import useFeaturedProjects from "../hooks/use-featured-projects";

const Index = () => {
  const projects = useFeaturedProjects();

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
        <div className="container sectiongap">
          <div className="content__area">
            <h2 className="as__h1">Featured web development projects</h2>

            <p className="leadin">
              A selection of applications completed by Morgan Baker Development.
              Using a mixture of WordPress and Gatsby.
            </p>
          </div>
        </div>
        <CardContainer>
          {projects.map((node, index) => {
            return (
              <Card
                route="/projects"
                key={index}
                to={node.gatsbyPath}
                node={node}
              />
            );
          })}
        </CardContainer>
        <ContactMethods />
        <Posts />
      </Layout>
    </>
  );
};

export default Index;
