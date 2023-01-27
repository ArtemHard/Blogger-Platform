import { FC } from "react";
import styled from "styled-components";
import { Input } from "./Elements/Inputs/SearchInput";
import { Select } from "./Elements/Select/Select";

const SearchWrapper = styled.div<SearchControlsPropsType>`
  margin: 23px 64px 29px 24px;
  display: flex;
  justify-content: ${(props) => (props.noSearch ? "end" : "space-between")};
  overflow: hidden;
`;

type SearchControlsPropsType = {
  noSearch: boolean;
};
export const SearchControls: FC<SearchControlsPropsType> = ({ noSearch }) => {
  return (
    <SearchWrapper noSearch={noSearch}>
      {!noSearch && <Input />}
      <Select />
    </SearchWrapper>
  );
};
