import styled from "styled-components";
import { LeftBlock } from "./LeftBlock";
import { RightBlock } from "./RightBlock";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Main = () => {
  return (
    <MainWrapper>
      <LeftBlock />
      <RightBlock />
    </MainWrapper>
  );
};
