import styled from "styled-components";
import { COLORS } from "../../../config/uiKit";

export const StyledArrowButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${COLORS.yellow};
  opacity: 1;
  transition: 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
      opacity: .7;
  }

  &:active {
      opacity: .5;
  }
`;