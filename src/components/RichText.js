import React from "react";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const IframeContainer = styled.span`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const options = {
  renderMark: {
    [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },

  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData } = node.data.target;
      return (
        <GatsbyImage className="contentimg" image={getImage(gatsbyImageData)} />
      );
    },
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.includes("player.vimeo.com/video")) {
        return (
          <IframeContainer>
            <iframe
              src={node.data.uri}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </IframeContainer>
        );
      } else if (node.data.uri.includes("youtube.com/embed")) {
        return (
          <IframeContainer>
            <iframe
              src={node.data.uri}
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </IframeContainer>
        );
      } else if (node.data.uri.includes("giphy.com/embed")) {
        return (
          <iframe src={node.data.uri} frameBorder="0" allowFullScreen></iframe>
        );
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
