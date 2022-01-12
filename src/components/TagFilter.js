import { graphql, useStaticQuery } from "gatsby";
import React from "react";

function countStoriesWithTags(stories) {
  stories.forEach((item) => {
    item.metadata.tags.map((tag) => {
      if (!tag.contentful_id === "") {
        console.log(tag.contentful_id);
      }
    });
  });
}

const TagFilter = () => {
  const { stories } = useStaticQuery(graphql`
    query {
      stories: allContentfulStories {
        nodes {
          metadata {
            tags {
              contentful_id
              name
            }
          }
        }
      }
    }
  `);
  console.clear();

  const storiesWithTags = countStoriesWithTags(stories.nodes);
  //   console.log(storiesWithTags);

  return (
    <div>
      <p>Filter</p>
    </div>
  );
};

export default TagFilter;
