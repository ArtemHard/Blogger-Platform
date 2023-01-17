import React from "react";
import { RightHeader } from "../../RightHeader";
import { useParams } from "react-router-dom";

export const BlogItem = () => {
  let { title } = useParams();
  return (
    <>
      <RightHeader blogTitle={title} />
    </>
  );
};
