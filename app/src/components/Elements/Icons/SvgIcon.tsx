import React, { FC } from "react";
import styled from "styled-components";

const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(Icon)`
  width: 18px;
  height: 18px;
`;
type CloudPropsType = {
  isActive?: boolean;
  fill?: string;
  d: string;
  viewBox: string;
};
export const SvgIcon: FC<CloudPropsType> = ({ isActive, d, viewBox, fill }) => (
  <Svg viewBox={viewBox}>
    <path fill={fill ? fill : isActive ? "#F8346B" : "#1A1718"} d={d} />
  </Svg>
);
