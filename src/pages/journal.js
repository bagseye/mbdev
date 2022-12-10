import React from "react";
import Layout from "../components/Layout";
import useAllStories from "../hooks/use-all-stories";
import TagItems from "../components/TagItems/TagItems";
import PostContainer from "../components/Posts/PostContainer";
import Post from "../components/Posts/Post";
import ServicesContainer from "../components/Services/ServicesContainer";

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
        {allStories.map((node, i) => {
          return <Post key={i} node={node} />;
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
      <ServicesContainer />
    </Layout>
  );
};

export default journalsPage;
