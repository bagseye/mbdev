import React from "react";
import useAllStories from "../hooks/use-all-stories";

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

  Object.keys(tagMeta).forEach((key) => {
    console.log(key);
  });
  //   console.log(tagMeta);

  return (
    <div>
      <div>
        {/* {tagMeta.forEach((item) => {
          item.map((itm) => {
            <p>{itm.name}</p>;
          });
        })} */}
      </div>
      <p>
        {/* {allTags.map((item) => {
          return <h2>{item.name}</h2>;
        })} */}
      </p>
    </div>
  );
};

export default TagFilter;
