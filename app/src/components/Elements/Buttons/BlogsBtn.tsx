import { FC } from "react";
import styled from "styled-components";
import { blogIcon } from "../../../img/icons/IconsConstant";
import { SvgIcon } from "../Icons/SvgIcon";
import { TextSpanNormal } from "../Text/TextSpanNormal";
import { BtnWrapperPropsType, PostsBtnPropsType } from "./PostsBtn";

const BtnWrapper = styled.div.attrs<BtnWrapperPropsType>((props) => ({
  onclick: props.onClick,
}))<BtnWrapperPropsType>`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const isActiveBollean = (isActiveBtn: "PostsBtn" | "BlogsBtn") =>
  isActiveBtn === "BlogsBtn" ? true : false;

export const BlogsBtn: FC<PostsBtnPropsType> = (props) => {
  return (
    <BtnWrapper onClick={props.onClick}>
      <SvgIcon
        isActive={isActiveBollean(props.isActiveBtn)}
        d={blogIcon}
        viewBox='0 0 18 10'
      />
      <TextSpanNormal isActive={isActiveBollean(props.isActiveBtn)}>
        Blogs
      </TextSpanNormal>
    </BtnWrapper>
  );
};
