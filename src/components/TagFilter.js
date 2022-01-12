import { graphql, useStaticQuery } from "gatsby";
import React from "react";

function countStoriesWithTags(stories) {
  // Return stories with tags
  console.log(stories.map((story, index) => story));
  //   console.log(stories);
}

const TagFilter = () => {
  const { stories } = useStaticQuery(graphql`
    query {
      stories: allContentfulStories {
        nodes {
          metadata {
            tags {
              name
            }
          }
        }
      }
    }
  `);
  console.clear();
  console.log(stories);

  const storiesWithTags = countStoriesWithTags(stories.nodes);
  return (
    <div>
      <p>Filter</p>
    </div>
  );
};

export default TagFilter;
