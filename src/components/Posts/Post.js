import React from "react";
import { PostGlobalStyles } from "./PostsGlobalStyles";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Post = ({ node }) => {
  const { title, gatsbyPath, createdAt } = node;
  const dateTimeFormat = new Date(Date.parse(createdAt));
  return (
    <PostGlobalStyles to={gatsbyPath}>
      <p className="route">/journal</p>
      <h2>{title}</h2>
      {createdAt && 
        <p className="date">
          <time dateTime={dateTimeFormat}>{createdAt}</time>
        </p>
      }
      <Button as="span" text="read Article" />
    </PostGlobalStyles>
  );
};

export default Post;

Post.propTypes = {
  node: PropTypes.object.isRequired,
};
