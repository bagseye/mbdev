import React from "react";
import { PostGlobalStyles } from "./PostsGlobalStyles";
import PropTypes from "prop-types";

const Post = ({ node }) => {
  const { title, gatsbyPath, createdAt } = node;
  return (
    <PostGlobalStyles to={gatsbyPath}>
      <p className="route">/journal</p>
      <h2>{title}</h2>
      {createdAt && <p className="date">{createdAt}</p>}
      <span className="btn">Read Article</span>
    </PostGlobalStyles>
  );
};

export default Post;

Post.propTypes = {
  node: PropTypes.object.isRequired,
};
