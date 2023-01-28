import React from "react";
import styled from "styled-components";
import { ShowMoreBtn } from "../Elements/Buttons/ShowMoreBtn";
import { PostCard } from "./PostCard/PostCard";

const postCardsData = [
  {
    mainSrc:
      "https://png.pngtree.com/png-clipart/20220615/original/pngtree-bald-young-guy-wearing-a-suite-illustration-vector-on-white-background-png-image_8048931.png",
    imgSrc:
      "https://png.pngtree.com/png-clipart/20220615/original/pngtree-bald-young-guy-wearing-a-suite-illustration-vector-on-white-background-png-image_8048931.png",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
  {
    mainSrc: "!#",
    imgSrc: "!#",
    title: 'Let"s fly into space',
    info: "The best blog in our village",
    creationData: "12.12.2022",
  },
];
const PostsWrapper = styled.div`
  /* width: 100%; */
  margin: 0px 64px 0 24px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-content: space-between; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;
export const PostsList = () => {
  return (
    <PostsWrapper>
      {postCardsData.map((p) => (
        <PostCard {...p} />
      ))}
      <ShowMoreBtn />
    </PostsWrapper>
  );
};
