import styled from "styled-components";
import { searchIcon } from "../../../img/icons/IconsConstant";
import { SvgIcon } from "../Icons/SvgIcon";

const InputWrapper = styled.div`
  position: relative;
  width: 60%;
`;

const SearchInput = styled.input`
  width: 60%;
  border: 1px solid #dedbdc;
  border-radius: 2px;
  height: 36px;
`;

export const Input = () => {
  return (
    <InputWrapper>
      <SearchInput />
      <SvgIcon viewBox='0 0 18 18' d={searchIcon} fill='#ADABAC' />
    </InputWrapper>
  );
};
