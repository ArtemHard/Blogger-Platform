import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { backArrow } from "../../../img/icons/IconsConstant";

const BtnWrapper = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 24px 12px 24px;
`;

const Button = styled.button`
  min-width: 115px;
  height: 24px;
  display: flex;
  justify-content: space-between;
`;

const TextBtn = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #1a1718;
`;
const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
})``;
type propsSvgType = {
  viewBox: string;
};
const Svg = styled(Icon)<propsSvgType>`
  width: ${(props) => widthValue(props.viewBox) || "18px"};
  height: ${(props) => heightValue(props.viewBox) || "18px"};
  position: relative;
  top: 7px;
`;
const widthValue = (str: string) => str.split(" ")[2] + "px";
const heightValue = (str: string) => str.split(" ")[3] + "px";

export const BackNavBtn = () => {
  const navigate = useNavigate();
  const btnClickHandler = () => {
    navigate("/");
  };
  return (
    <BtnWrapper>
      <Button onClick={btnClickHandler}>
        <Svg viewBox='0 0 14 10'>
          <path fill='#1A1718' d={backArrow} />
        </Svg>
        <TextBtn>Back to blogs</TextBtn>
      </Button>
    </BtnWrapper>
  );
};
