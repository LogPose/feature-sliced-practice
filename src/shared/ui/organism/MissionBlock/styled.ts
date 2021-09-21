import styled from "styled-components";
import { COLORS } from "../../../config/uiKit";

export const MissionBlockWrapper = styled.div`
  display: flex;
`;

export const StyledMissionLeftBlock = styled.div`
  min-width: 270px;
`;

export const StyledMissionRightBlock = styled.div`
  box-sizing: border-box;
  padding: 120px 100px 120px;
  width: 100%;
  height: 520px;
  display: flex;
  gap: 80px;
  background-color: ${COLORS.darkBlue};
  position: relative;
`;

export const StyledMissionTextBlock = styled.div`
  width: 470px;
  color: ${COLORS.textWhite};
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const StyledQuoteBlock = styled.div`
  position: absolute;
  bottom: -40px;
  left: 500px;
`;

export const StyledWavesBlock = styled.div`
  position: absolute;
  bottom: -30px;
  right: 120px;
  z-index: 2;
`;