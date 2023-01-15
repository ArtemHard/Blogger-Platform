import styled from "styled-components";
import { FC } from "react";

const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(Icon).attrs({
  className: "search_svg",
})`
  width: 18px;
  height: 18px;
  position: absolute;
  left: 15px;
  top: 10px;

  .searchInput:focus .search_svg {
    // Не работает
    display: none;
  }
`;
type CloudPropsType = {
  isActive?: boolean;
  fill?: string;
  d: string;
  viewBox: string;
};

export const SearchIconSvg: FC<CloudPropsType> = ({
  isActive,
  d,
  viewBox,
  fill,
}) => (
  <Svg viewBox={viewBox}>
    <path fill={fill ? fill : isActive ? "#F8346B" : "#1A1718"} d={d} />
  </Svg>
);
