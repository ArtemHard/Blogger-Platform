import styled from "styled-components";
import { Blog, BlogPropsType } from "./Blog/Blog";
import { ShowMoreBtn } from "./Elements/Buttons/ShowMoreBtn";
import { RightHeader } from "./RightHeader";
import { SearchControls } from "./SearchControls";

const RightBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #faf7f8;
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
      <RightHeader />
      <SearchControls />
      {blogs.map((b) => (
        <Blog key={b.title} {...b} />
      ))}
      <ShowMoreBtn />
    </RightBlockWrapper>
  );
};
