import styled from "styled-components";
import { COLORS } from "../../../config/uiKit";

export const StyledInput = styled.input`
  width: 550px;
  box-sizing: border-box;
  padding: 10px;
  font-family: "Gilroy Regular", sans-serif;
  font-size: 16px;
  height: 80px;
  border-radius: 0;
  border: none;
  box-shadow: -2px -2px 10px 0px rgba(0, 0, 0, 0.1),
    2px 2px 10px 0px rgba(0, 0, 0, 0.1), -2px 2px 10px 0px rgba(0, 0, 0, 0.1),
    2px -2px 10px 0px rgba(0, 0, 0, 0.1);
  outline: 0;
  outline-offset: 0;

  ::placeholder {
      color: ${COLORS.textGray}
  }

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;
