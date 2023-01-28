import React from "react";
import { useParams } from "react-router-dom";
import { BackNavBtn } from "../Elements/Buttons/BackNavBtn";
import { RightHeader } from "../RightHeader";

export const PostItemPage = () => {
  let { title } = useParams();
  return (
    <>
      <RightHeader blogTitle={title} headerTitle={"Posts"} />
      <BackNavBtn />
      Нихера не понятно Что Блоги, а Что посты !!! Херли в навигацию
      запихивать!!!
    </>
  );
};
