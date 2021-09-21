import styled from "styled-components";
import { COLORS } from "../../../config/uiKit";

export const StyledTextButton = styled.span`
  width: fit-content;
  margin: 0;
  padding: 0;
  font-family: "Gilroy Regular", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.yellow};
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  transition: 0.2s;
  user-select: none;

  &:hover {
    border-bottom: 1px solid ${COLORS.yellow};
    cursor: pointer;
  }
`;
