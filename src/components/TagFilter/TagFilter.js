import React from "react";
import useAllStories from "../../hooks/use-all-stories";
import { Link } from "gatsby";
import { TagFilterGlobalStyles } from "./TagFilterStyles";

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
    <TagFilterGlobalStyles>
      <div className="tagfilter__container">
        {Object.values(tagMeta).map((item) => {
          let slugifyName = item.id.replace(
            /[A-Z]/g,
            (m) => "-" + m.toLowerCase()
          );
          return (
            <Link
              className="tagfilter__item"
              key={item.id}
              to={`/category/${slugifyName}`}
            >
              {item.name}
              <span className="tagfilter__count">{item.count}</span>
            </Link>
          );
        })}
      </div>
    </TagFilterGlobalStyles>
  );
};

export default TagFilter;
