import React from "react";
import styled from "styled-components";
import { TextSpanNormal } from "./Elements/Text/TextSpanNormal";
import { SvgIcon } from "./Elements/Icons/SvgIcon";
import { blogIcon, postIcon } from "../img/icons/IconsConstant";

const LeftColumn = styled.div`
  width: 30%;
  height: 100vh;
  background: #fcfbfb;
  background-color: #d9ffc4; // DELETE
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  gap: 24px;
`;

export const LeftBlock = () => {
  return (
    <LeftColumn>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <SvgIcon isActive={true} d={blogIcon} viewBox='0 0 18 10' />
        <TextSpanNormal isActive={true}>Blogs</TextSpanNormal>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <SvgIcon d={postIcon} viewBox='0 0 18 18' />
        <TextSpanNormal>Posts</TextSpanNormal>
      </div>
    </LeftColumn>
  );
};
