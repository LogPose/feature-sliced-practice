import styled from "styled-components";
import { COLORS } from "../../../config/uiKit";

export const StyledHeader = styled.div`
  height: 120px;
  display: flex;
`;

export const StyledHeaderLeftBlock = styled.div`
  min-width: 270px;
  height: 100%;
  background-color: ${COLORS.darkBlue};
  display: flex;
  box-sizing: border-box;
`;

export const StyledHeaderRightBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 160px 0 70px;
`;
