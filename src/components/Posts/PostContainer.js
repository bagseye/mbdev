import React from "react";
import { PostContainerGlobalStyles } from "./PostsGlobalStyles";
import PropTypes from "prop-types";

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

PostContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  noscroll: PropTypes.bool,
};
