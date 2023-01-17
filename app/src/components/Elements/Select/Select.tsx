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

const options = [
  { value: "New blogs first", text: "New blogs first" },
  { value: "Old blogs first", text: "Old blogs first" },
  { value: "From A to Z", text: "From A to Z" },
  { value: "From Z to A", text: "From Z to A" },
];

export const Select = () => {
  return (
    <Selection>
      {options.map((v) => (
        <option value={v.value}>{v.text}</option>
      ))}
    </Selection>
  );
};
