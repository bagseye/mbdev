import React from "react";
import Button from "../Button/Button";
import { PostGlobalStyles } from "./PostsGlobalStyles";

const Post = ({ node }) => {
  const { title, gatsbyPath } = node;
  return (
    <PostGlobalStyles to={gatsbyPath}>
      <p className="route">/journal</p>
      <h2>{title}</h2>
      <p></p>
      <Button as="span" text="Read Article" />
    </PostGlobalStyles>
  );
};

export default Post;
