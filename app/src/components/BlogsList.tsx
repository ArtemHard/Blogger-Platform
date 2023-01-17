import React from "react";
import { Blog } from "./Blog/Blog";
import { ShowMoreBtn } from "./Elements/Buttons/ShowMoreBtn";
import { RightHeader } from "./RightHeader";
import { SearchControls } from "./SearchControls";

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
];
export const BlogsList = () => {
  return (
    <>
      <RightHeader />
      <SearchControls />
      {blogs.map((b) => (
        <Blog key={b.title} {...b} />
      ))}
      <ShowMoreBtn />
    </>
  );
};
