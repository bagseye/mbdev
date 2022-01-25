import React from "react";
import { PostContainerGlobalStyles } from "./PostsGlobalStyles";

const PostContainer = ({ children, noscroll }) => {
  return (
    <PostContainerGlobalStyles
      className={`container sectiongap ${noscroll ? "noscroll" : ""}`}
    >
      {children}
    </PostContainerGlobalStyles>
  );
};

export default PostContainer;
