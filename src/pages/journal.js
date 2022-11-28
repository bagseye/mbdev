import React from "react";
import Layout from "../components/Layout";
import useAllStories from "../hooks/use-all-stories";
import TagItems from "../components/TagItems/TagItems";
import PostContainer from "../components/Posts/PostContainer";
import Post from "../components/Posts/Post";
import ServicesContainer from "../components/Services/ServicesContainer";
import Service from "../components/Services/Service";
import { StaticImage } from "gatsby-plugin-image";

const journalsPage = () => {
  const allStories = useAllStories();

  return (
    <Layout>
      <div className="container topgap">
        <div className="intro__area">
          <h1>Web development journal and open-source project updates</h1>
          <h4>
            A deep-dive into my progress in web development, with a focus on
            WordPress, React, Gatsby and open-source.
          </h4>
        </div>
      </div>
      <div className="container">
        <TagItems />
      </div>
      <PostContainer noscroll={true}>
        {allStories.map((node) => {
          return <Post node={node} />;
        })}
      </PostContainer>
      <div className="container sectiongap">
        <div className="content__area">
          <h2 className="as__h1">Looking for web design or branding serivces in Inverness?</h2>

          <p className="leadin">
            Choose from the options below, if you are looking for expert web development, or finely crafted branding services.
          </p>
        </div>
      </div>
      <ServicesContainer>
        <Service
          route="/services"
          to="/services/web-design"
          name="Inverness Web Design"
          excerpt="SEO-friendly websites that are perfect for accelerating your business growth."
        >
          <StaticImage src="../../static/gatsby-services-banner.jpg"/>
        </Service>
        <Service
          route="/services"
          to="/services/brand-consultancy"
          name="Branding & Logo Design in Inverness"
          excerpt="Complement your products and services with a brand or logo design design package."
        >
          <StaticImage src="../../static/business-meeting.jpg"/>
        </Service>
      </ServicesContainer>
    </Layout>
  );
};

export default journalsPage;
