import React from "react";
import Layout from "../components/Layout";
import useAllStories from "../hooks/use-all-stories";
import TagItems from "../components/TagItems/TagItems";
import { JournalListStyles } from "../components/Journal/JournalGlobalStyles";
import JournalItem from "../components/Journal/JournalItem";

const journalsPage = () => {
  const allStories = useAllStories();

  return (
    <Layout>
      <JournalListStyles className="topgap">
        <div className="container">
          <div className="intro__area">
            <h1>Web development journal and open-source project updates</h1>
            <h4>
              A deep-dive into my progress in web development, with a focus on
              WordPress, React, Gatsby and open-source.
            </h4>
          </div>
          <TagItems />
          <div className="journal__content">
            {allStories.map((node, index) => {
              return (
                <JournalItem
                  key={index}
                  title={node.title}
                  path={node.gatsbyPath}
                  createdAt={node.createdAt}
                  tagsMeta={node.metadata.tags}
                />
              );
            })}
          </div>
        </div>
      </JournalListStyles>
    </Layout>
  );
};

export default journalsPage;
