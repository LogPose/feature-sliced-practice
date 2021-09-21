import styled from "styled-components";
import { COLORS } from "../../../config/uiKit";

export const StyledMenuText = styled.span`
  margin: 0;
  padding: 0;
  font-family: "Gilroy Regular", sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${COLORS.textBlack};
  box-sizing: border-box;
  transition: 0.2s;
  user-select: none;

  &:hover {
    color: ${COLORS.yellow};
    cursor: pointer;
  }
`;
