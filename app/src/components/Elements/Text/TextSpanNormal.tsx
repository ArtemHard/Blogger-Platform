import styled from "styled-components";

type TextSpanNormalPropsType = {
    isActive?: boolean
}
export const TextSpanNormal = styled.span<TextSpanNormalPropsType>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: ${(props) => props.isActive ? '#F8346B' : '#1A1718'};
`