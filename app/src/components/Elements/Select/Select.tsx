import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Selection = styled.select`
  width: 30%;
  height: 36px;
  display: block;
  outline: none;
  border: 1px solid #dedbdc;
  border-radius: 2px;

  option {
    background: #faf7f8;
  }
`;

const optionsBlogs = [
  { value: "New blogs first", text: "New blogs first" },
  { value: "Old blogs first", text: "Old blogs first" },
  { value: "From A to Z", text: "From A to Z" },
  { value: "From Z to A", text: "From Z to A" },
];

const optionsPosts = [
  { value: "New posts first", text: "New posts first" },
  { value: "Old posts first", text: "Old posts first" },
];

export const Select = () => {
  let location = useLocation();

  // Загружаем нужные опции selecte, в зависимости от места нахождения
  const chooseoptions = () => {
    // const reg1 = /^(\/posts)|(\/blogs)/i;
    return location.pathname.startsWith("/posts") ? optionsPosts : optionsBlogs;
  };

  return (
    <Selection>
      {chooseoptions().map((v) => (
        <option value={v.value}>{v.text}</option>
      ))}
    </Selection>
  );
};
