import styled from "styled-components";
import { BlogPage } from "./pages/BlogPage";
import { Route, Routes } from "react-router-dom";
import { BlogItem } from "./Blog/BlogItem/BlogItem";
import { PostsPage } from "./pages/PostsPage";
export const RightBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #faf7f8;
`;

export const RightBlock = () => {
  return (
    <RightBlockWrapper>
      <Routes>
        <Route path='/' element={<BlogPage />} />
        <Route path='/blog/:title' element={<BlogItem />} />
        <Route path='/posts' element={<PostsPage />} />
      </Routes>
    </RightBlockWrapper>
  );
};
