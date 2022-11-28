import React from "react";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const options = {
  renderMark: {
    [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },

  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;
      return (
        <GatsbyImage
          className="contentimg"
          image={getImage(gatsbyImageData)}
          alt={
            description
              ? description
              : "Image content for Morgan Baker Development"
          }
        />
      );
    },
    [INLINES.HYPERLINK]: (node) => {
      const { uri } = node.data;
      if (uri.includes("player.vimeo.com/video")) {
        return (
          <span className="iframe__ratio">
            <iframe
              src={uri}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </span>
        );
      } else if (uri.includes("youtube.com/embed")) {
        return (
          <span className="iframe__ratio">
            <iframe
              src={uri}
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </span>
        );
      } else if (uri.includes("giphy.com/embed")) {
        return (
          <iframe src={uri} frameBorder="0" allowFullScreen></iframe>
        );
      } else {
        return (
          <a href={uri} title={node.content[0].value}>{node.content[0].value}</a>
        )
      }
    },
  },
};

const RichText = ({ richText }) => {
  return <div>{renderRichText(richText, options)}</div>;
};

RichText.propTypes = {
  richText: PropTypes.any.isRequired,
};

export default RichText;
