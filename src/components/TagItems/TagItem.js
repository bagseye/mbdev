import React from "react";
import { TagItemGlobalStyles } from "./TagItemsStyles";

const TagItem = ({ name, id, count }) => {
  let slugifyName = id.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
  return (
    <TagItemGlobalStyles to={`/category/${slugifyName}`}>
      {name}
      {count && <span className="tagfilter__count">{count}</span>}
    </TagItemGlobalStyles>
  );
};

export default TagItem;
