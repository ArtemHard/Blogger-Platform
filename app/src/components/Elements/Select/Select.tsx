import React from "react";
import styled from "styled-components";
import { selectionIcon } from "../../../img/icons/IconsConstant";
import { SelectIconSvg } from "../Icons/SelectIconSvg";

const Selection = styled.select`
  width: 30%;
  height: 36px;
  display: block;
  outline: none;
  border: 1px solid #dedbdc;
  border-radius: 2px;
`;

const options = [
  { value: "New blogs first", text: "New blogs first" },
  { value: "Most populate", text: "Most populate" },
];

export const Select = () => {
  return (
    <>
      <Selection>
        {options.map((v) => (
          <option value={v.value}>{v.text}</option>
        ))}
      </Selection>
      {/* <SelectIconSvg viewBox='0 0 12 8' d={selectionIcon} /> */}
    </>
  );
};
