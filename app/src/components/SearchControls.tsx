import React from "react";
import styled from "styled-components";
import { Input } from "./Elements/Inputs/SearchInput";
import { Select } from "./Elements/Select/Select";

const SearchWrapper = styled.div`
  margin: 23px 64px 29px 24px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const SearchControls = () => {
  return (
    <SearchWrapper>
      <Input />
      <Select />
    </SearchWrapper>
  );
};
