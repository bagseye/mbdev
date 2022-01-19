import React from "react";
import Button from "../Button/Button";
import { JournalItemStyles } from "./JournalGlobalStyles";

const JournalItem = ({ title, createdAt, tagsMeta, path }) => {
  return (
    <JournalItemStyles to={path}>
      <h2>{title}</h2>
      <h4>Posted on - {createdAt}</h4>
      {tagsMeta.length > 0 && (
        <>
          <p className="journal__category--title">Categorised under: </p>
          <ul className="journal__category--list">
            {tagsMeta.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
        </>
      )}

      <Button as="span" text="Read Article" />
    </JournalItemStyles>
  );
};

export default JournalItem;
