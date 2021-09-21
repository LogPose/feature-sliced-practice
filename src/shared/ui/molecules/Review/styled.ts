import styled from "styled-components";
import { COLORS } from "../../../config/uiKit";
import { StyledImage } from "../../atoms/Image/styled";

export const StyledReview = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 20px;
`;

export const StyledQuoteWrapper = styled.div<{
  isDark: boolean;
}>`
  position: relative;
  min-width: 300px;
  width: fit-content;
  max-width: 600px;
  box-sizing: border-box;
  padding: 70px;
  color: ${({ isDark }) => (isDark ? COLORS.textWhite : COLORS.textBlack)};
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 2;
  flex-direction: column;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  background-color: ${({ isDark }) =>
    isDark ? COLORS.darkBlue : COLORS.textWhite};
`;

export const StyledTomoeCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  background-color: ${COLORS.textWhite};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  top: -25px;
  left: 60px;
`;

export const StyledUserBlock = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledUserAvatar = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;

  ${StyledImage} {
    width: 100%;
    height: 100%;
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
`;
