import { FC } from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  width: 300px;
  height: 304px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
type ImagePropsType = {
  src: string;
};
const Image = styled.img.attrs<ImagePropsType>((props) => ({
  src: props.src,
}))<ImagePropsType>`
  height: 180px;
  width: 300px;
  background-image: black;
  padding-bottom: 18px;
`;
const Title = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Neutral Dark / -60 */

  color: #1a1718;
  padding-bottom: 12px;
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 6px;
  color: #1a1718;
`;

const CreationDate = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  letter-spacing: 0.02em;

  /* Neutral Light / -60 */

  color: #636262;
`;

type PostPropsType = {
  src: string;
  title: string;
  text: string;
  data: string;
};
export const Post: FC<PostPropsType> = ({ src, title, text, data }) => {
  const smallText = (text: string): string => {
    if (text.length > 20) return text.slice(0, 70) + " ...";
    else return text;
  };

  return (
    <PostWrapper>
      <Image src={src} />
      <Title>{title}</Title>
      <Text>{smallText(text)}</Text>
      <CreationDate>{data}</CreationDate>
    </PostWrapper>
  );
};
