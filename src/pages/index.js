import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";
import Banner from "../components/Banner/Banner";
import BannerForm from "../components/BannerForm/BannerForm";
import CardContainer from "../components/Cards/CardContainer";
import Card from "../components/Cards/Card";
import useFeaturedProjects from "../hooks/use-featured-projects";
import PostContainer from "../components/Posts/PostContainer";
import Post from "../components/Posts/Post";
import useFeaturedStories from "../hooks/use-featured-stories";
import Button from "../components/Button/Button";

const Index = () => {
  const projects = useFeaturedProjects();
  const stories = useFeaturedStories();

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <BannerForm
          title="User-focused web design & development services."
          subTitle="Developing bespoke content-management systems for businesses, helping them achieve higher conversions."
        />
        {/* <Banner
          title="Bespoke web design & development in Inverness."
          subTitle="Creating modern, user-friendly experiences using Wordpress and GatsbyJS."
          scrollerText="Scroll"
          ctaOneText="Current Services"
          ctaOneLink="/services"
          ctaTwoText="All Projects"
          ctaTwoLink="/projects"
        /> */}
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

        <div className="container sectiongap">
          <div className="content__area">
            <h2 className="as__h1">Recent journal entries</h2>
            <p className="leadin">
              Keep up-to-date with posts about open-source project releases and
              industry specific viewpoints.
            </p>
          </div>
        </div>
        <PostContainer>
          {stories.map((node, index) => {
            return <Post key={index} node={node} />;
          })}
        </PostContainer>
        <div className="container">
          <Button to="/journal" text="View all journal entries" />
        </div>
        <ContactMethods />
      </Layout>
    </>
  );
};

export default Index;
