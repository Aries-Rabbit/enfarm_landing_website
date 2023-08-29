import React from "react";

export const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  return (
    <img
      {...{ src: placeholderSrc, ...props }}
      alt={props.alt || ""}
      className="image"
    />
  );
};
