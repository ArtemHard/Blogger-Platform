import { useState } from "react";
import styled from "styled-components";
import { BlogsBtn } from "./Elements/Buttons/BlogsBtn";
import { PostsBtn } from "./Elements/Buttons/PostsBtn";

const LeftColumn = styled.div`
  width: 15%;
  height: 100vh;
  background: #fcfbfb;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  gap: 24px;
`;

export const LeftBlock = () => {
  const [isActiveBtn, setIsActiveBtn] = useState<"PostsBtn" | "BlogsBtn">(
    "PostsBtn"
  );

  const ClickBlogsBtnHandler = () => {
    setIsActiveBtn("BlogsBtn");
  };
  const ClickPostsBtnHandler = () => {
    setIsActiveBtn("PostsBtn");
  };

  return (
    <LeftColumn>
      <BlogsBtn isActiveBtn={isActiveBtn} onClick={ClickBlogsBtnHandler} />
      <PostsBtn isActiveBtn={isActiveBtn} onClick={ClickPostsBtnHandler} />
    </LeftColumn>
  );
};
