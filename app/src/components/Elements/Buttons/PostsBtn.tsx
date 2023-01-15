import { FC } from "react";
import styled from "styled-components";
import { postIcon } from "../../../img/icons/IconsConstant";
import { SvgIcon } from "../Icons/SvgIcon";
import { TextSpanNormal } from "../Text/TextSpanNormal";

export type PostsBtnPropsType = {
  isActiveBtn: "PostsBtn" | "BlogsBtn";
  onClick: () => void;
};

export type BtnWrapperPropsType = {
  onClick: () => void;
};
const BtnWrapper = styled.div.attrs<BtnWrapperPropsType>((props) => ({
  onclick: props.onClick,
}))<BtnWrapperPropsType>`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const isActiveBollean = (isActiveBtn: "PostsBtn" | "BlogsBtn") =>
  isActiveBtn === "PostsBtn" ? true : false;

export const PostsBtn: FC<PostsBtnPropsType> = (props) => {
  return (
    <BtnWrapper onClick={props.onClick}>
      <SvgIcon
        isActive={isActiveBollean(props.isActiveBtn)}
        d={postIcon}
        viewBox='0 0 18 18'
      />
      <TextSpanNormal isActive={isActiveBollean(props.isActiveBtn)}>
        Posts
      </TextSpanNormal>
    </BtnWrapper>
  );
};
