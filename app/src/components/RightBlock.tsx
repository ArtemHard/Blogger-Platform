import React from "react";
import styled from "styled-components";
import { Input } from "./Elements/Inputs/SearchInput";

const LeftBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RightHeader = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-left: 24px;
  margin-top: 29px;
  border-bottom: 1px solid #dedbdc;
  padding-bottom: 7px;
  width: 100%;

  display: flex;

  /* Neutral Dark / -60 */

  color: #1a1718;
`;

const SearchWrapper = styled.div`
  width: 100%;
  margin: 23px 64px 29px 24px;
  display: flex;
  justify-content: space-between;
`;

export const RightBlock = () => {
  return (
    <LeftBlockWrapper>
      <RightHeader>
        Blogs
        <h2>{`> next-page > next page2`}</h2>
      </RightHeader>
      <SearchWrapper>
        <Input />
      </SearchWrapper>
    </LeftBlockWrapper>
  );
};
