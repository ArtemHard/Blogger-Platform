import React from "react";
import styled from "styled-components";

const LeftColumn = styled.div`
  width: 25%;
  height: 100vh;
  background: #fcfbfb;
  background-color: #d9ffc4; // DELETE
  border-radius: 0px;
`;

export const LeftBlock = () => {
  return (
    <LeftColumn>
      <h3>
      LeftBlock
      </h3>
    </LeftColumn>
  );
};
