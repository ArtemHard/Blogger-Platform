import styled from "styled-components";
import { BlogsList } from "./BlogsList";
import { Route, Routes } from "react-router-dom";
import { BlogItem } from "./Blog/BlogItem/BlogItem";
const RightBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #faf7f8;
`;

export const RightBlock = () => {
  return (
    <RightBlockWrapper>
      <Routes>
        <Route path='/' element={<BlogsList />} />
        <Route path='/blog/:title' element={<BlogItem />} />
      </Routes>
    </RightBlockWrapper>
  );
};
