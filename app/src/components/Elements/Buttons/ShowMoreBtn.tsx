import React from "react";
import styled from "styled-components";
import { ArrowDownIcon } from "../../../img/icons/IconsConstant";
import { SvgIcon } from "../Icons/SvgIcon";

const BtnWrapper = styled.div`
  margin: 48px 0px 43px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: 1px solid #1a1718;
  border-radius: 2px;
  width: 153px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBtn = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding-right: 11px;
`;

export const ShowMoreBtn = () => {
  return (
    <BtnWrapper>
      <Button>
        <TextBtn>Show More</TextBtn>
        <SvgIcon
          fill='none'
          viewBox='0 0 10 6'
          d={ArrowDownIcon}
          stroke='#1A1718'
        />
      </Button>
    </BtnWrapper>
  );
};
