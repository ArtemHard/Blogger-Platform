import { FC } from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  width: 300px;
  height: fit-content;
`;
type ImagePropsType = {
  src: string;
};
const Image = styled.img.attrs<ImagePropsType>((props) => ({
  src: props.src,
}))<ImagePropsType>``;
type PostPropsType = {
  src: string;
  title: string;
  text: string;
  data: string;
};
export const Post: FC<PostPropsType> = ({ src, title, text, data }) => {
  return <PostWrapper></PostWrapper>;
};
