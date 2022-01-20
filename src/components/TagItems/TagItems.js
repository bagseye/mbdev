import React from "react";
import useAllStories from "../../hooks/use-all-stories";
import { TagItemsGlobalStyles } from "./TagItemsStyles";
import TagItem from "./TagItem";

const TagFilter = () => {
  const allStories = useAllStories();

  const tagMeta = allStories
    .map((item) => {
      return item.metadata.tags;
    })
    .flat()
    .reduce((acc, tag) => {
      // Check if exisiting
      // if yes, increment
      const exisiting = acc[tag.contentful_id];
      if (exisiting) {
        exisiting.count += 1;
      } else {
        //otherwise new entry
        acc[tag.contentful_id] = {
          id: tag.contentful_id,
          name: tag.name,
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
