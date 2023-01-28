import React from "react";
import { RightHeader } from "../../RightHeader";
import { useParams } from "react-router-dom";
import { BackNavBtn } from "../../Elements/Buttons/BackNavBtn";
import styled from "styled-components";
import { Blog } from "../Blog";
import { blogs } from "../../pages/BlogPage";
import { BlogsList } from "../../BlogsList";

const Image = styled.img`
  width: 100%;
  height: 312px;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  object-fit: cover;
  background: #ffffff;
  border: none;
`;

export const BlogItem = () => {
  let { title } = useParams();
  return (
    <>
      <RightHeader blogTitle={title} />
      <BackNavBtn />
      <Image />
      {blogs.map((b) => {
        if (b.title === title) return <Blog {...b} showMoreBtn={true} />;
      })}
      <BlogsList />
    </>
  );
};
