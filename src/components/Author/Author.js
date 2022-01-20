import React from "react";
import { Link } from "gatsby";
import { AuthorGlobalStyles } from "./AuthorStyles";

const Author = () => {
  return (
    <AuthorGlobalStyles>
      <h3>Written by Morgan Baker</h3>
      <p>
        I'm a front end developer from Inverness, working with WordPress and
        Gatsby. Take a look at my recent projects{" "}
        <Link to="/projects">here</Link>.
      </p>
    </AuthorGlobalStyles>
  );
};

export default Author;
