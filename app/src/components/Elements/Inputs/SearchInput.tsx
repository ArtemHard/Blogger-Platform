import styled from "styled-components";
import { searchIcon } from "../../../img/icons/IconsConstant";
import { SearchIconSvg } from "../Icons/SearchIconSvg";

const InputWrapper = styled.div`
  position: relative;
  width: 60%;
`;

const SearchInput = styled.input.attrs({
  className: "searchInput",
  type: "search",
  placeholder: "Search",
})`
  width: 70%;
  border: 1px solid #dedbdc;
  border-radius: 2px;
  height: 36px;
  padding-left: 10px;
  padding-right: 10px;
  ::placeholder {
    padding-left: 30px;
  }
`;

export const Input = () => {
  return (
    <InputWrapper>
      <SearchInput />
      <SearchIconSvg viewBox='0 0 18 18' d={searchIcon} fill='#ADABAC' />
    </InputWrapper>
  );
};
