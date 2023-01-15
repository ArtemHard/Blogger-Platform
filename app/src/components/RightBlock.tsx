import React from "react";
import styled from "styled-components";
import { nextPageIcon } from "../img/icons/IconsConstant";
import { Blog, BlogPropsType } from "./Blog/Blog";
import { ShowMoreBtn } from "./Elements/Buttons/ShowMoreBtn";
import { SvgIcon } from "./Elements/Icons/SvgIcon";
import { SvgNextPageIcon } from "./Elements/Icons/SvgNextPageIcon";
import { Input } from "./Elements/Inputs/SearchInput";
import { Select } from "./Elements/Select/Select";

const RightBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #faf7f8;
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
  align-items: center;
  /* Neutral Dark / -60 */

  color: #1a1718;
`;

const SearchWrapper = styled.div`
  margin: 23px 64px 29px 24px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const LinkHeader = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  /* Neutral Dark / -60 */
  color: #1a1718;
  padding: 5px 0 0 10px;
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
        <SvgNextPageIcon d={nextPageIcon} viewBox='0 0 4 8' fill='#797476' />
        <LinkHeader>
          <a href='#!'>next-page2</a>
        </LinkHeader>
        <SvgNextPageIcon d={nextPageIcon} viewBox='0 0 4 8' fill='#797476' />
        <LinkHeader>
          <a href='#!'>next-page3</a>
        </LinkHeader>
      </RightHeader>
      <SearchWrapper>
        <Input />
        <Select />
      </SearchWrapper>
      {blogs.map((b) => (
        <Blog key={b.title} {...b} />
      ))}
      <ShowMoreBtn />
    </RightBlockWrapper>
  );
};
