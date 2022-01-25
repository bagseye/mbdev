import React from "react";
import Layout from "../components/Layout";
import useAllStories from "../hooks/use-all-stories";
import TagItems from "../components/TagItems/TagItems";
import PostContainer from "../components/Posts/PostContainer";
import Post from "../components/Posts/Post";

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
    </Layout>
  );
};

export default journalsPage;
