import React, { FC } from "react";
import styled from "styled-components";
import { ArrowDownIcon } from "../../../img/icons/IconsConstant";
import { SvgIcon } from "../Icons/SvgIcon";

const BtnWrapper = styled.div<ShowMoreBtnPropsType>`
  margin: ${(props) =>
    props.noBorder ? "0px 0px 20px 0px" : " 48px 0px 43px 0px"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button<ShowMoreBtnPropsType>`
  border: ${(props) => (props.noBorder ? "none" : "1px solid #1a1718")};
  border-radius: 2px;
  width: 153px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBtn = styled.span<ShowMoreBtnPropsType>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding-right: 11px;
  color: ${(props) => color(!!props.noBorder)};
`;

const color = (noBorder: boolean) => (noBorder ? "#797476" : "#1A1718");

type ShowMoreBtnPropsType = {
  noBorder?: boolean;
};
export const ShowMoreBtn: FC<ShowMoreBtnPropsType> = ({ noBorder }) => {
  return (
    <BtnWrapper noBorder={noBorder}>
      <Button noBorder={noBorder}>
        <TextBtn noBorder={noBorder}>Show More</TextBtn>
        <SvgIcon
          fill='none'
          viewBox='0 0 10 6'
          d={ArrowDownIcon}
          stroke={color(!!noBorder)}
        />
      </Button>
    </BtnWrapper>
  );
};
