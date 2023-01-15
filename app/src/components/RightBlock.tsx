import React from "react";
import styled from "styled-components";
import { Blog, BlogPropsType } from "./Blog/Blog";
import { ShowMoreBtn } from "./Elements/Buttons/ShowMoreBtn";
import { Input } from "./Elements/Inputs/SearchInput";
import { Select } from "./Elements/Select/Select";

const RightBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RightHeader = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-left: 24px;
  margin-top: 29px;
  border-bottom: 1px solid #dedbdc;
  padding-bottom: 7px;
  width: 100%;

  display: flex;

  /* Neutral Dark / -60 */

  color: #1a1718;
`;

const SearchWrapper = styled.div`
  margin: 23px 64px 29px 24px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

type BlogsType = BlogPropsType[];

const blogs = [
  {
    title: "The best blog in our village",
    website: "https://www.youtube.com/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: " ",
  },
  {
    title: "Warriors",
    website: "https://www.youtube.com/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: " ",
  },
  {
    title: "Audience Platform",
    website: "https://www.youtube.com/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: " ",
  },
  {
    title: "The best blog in our village",
    website: "https://www.youtube.com/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: " ",
  },
  {
    title: "Warriors",
    website: "https://www.youtube.com/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: " ",
  },
  {
    title: "Audience Platform",
    website: "https://www.youtube.com/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: " ",
  },
];
export const RightBlock = () => {
  return (
    <RightBlockWrapper>
      <RightHeader>
        Blogs
        <h2>{`> next-page > next page2`}</h2>
      </RightHeader>
      <SearchWrapper>
        <Input />
        <Select />
      </SearchWrapper>
      {blogs.map((b) => (
        <Blog {...b} />
      ))}
      <ShowMoreBtn />
    </RightBlockWrapper>
  );
};
