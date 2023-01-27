import React from "react";
import { RightHeader } from "../RightHeader";
import { SearchControls } from "../SearchControls";

export const PostsPage = () => {
  return (
    <>
      <RightHeader headerTitle='Posts' />
      <SearchControls noSearch={true} />
    </>
  );
};
