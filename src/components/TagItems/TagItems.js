import React from "react";
import useAllStories from "../../hooks/use-all-stories";
import { TagItemsGlobalStyles } from "./TagItemsStyles";
import TagItem from "./TagItem";

const TagFilter = () => {
  const allStories = useAllStories();

  const tagMeta = allStories
    .map((story) => {
      return story.metadata.tags;
    })
    .flat()
    .reduce((acc, tagObj) => {
      // Check if it exists, if so, increment
      const existing = acc[tagObj.contentful_id];
      if (existing) {
        existing.count++;
      } else {
        // Otherwise, create a new entry in the object
        acc[tagObj.contentful_id] = {
          id: tagObj.contentful_id,
          name: tagObj.name,
          count: 1,
        };
      }
      return acc;
    }, {});

  return (
    <TagItemsGlobalStyles>
      <div className="tagfilter__container">
        {Object.values(tagMeta).map((item) => {
          return (
            <TagItem
              key={item.id}
              id={item.id}
              name={item.name}
              count={item.count}
            />
          );
        })}
      </div>
    </TagItemsGlobalStyles>
  );
};

export default TagFilter;
