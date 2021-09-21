import styled from "styled-components";
import { COLORS } from "../../../config/uiKit";
import { StyledTypography } from "../../atoms/Typography/styled";

export const StyledQuoteWrapper = styled.div<{
  isDark: boolean;
  isReview: boolean;
}>`
  position: relative;
  width: ${({ isReview }) => (isReview ? "fit-content" : "300px")};
  min-width: 300px;
  height: 180px;
  box-sizing: border-box;
  padding: ${({ isReview }) => (isReview ? "80px" : "0 25px;")};
  color: ${({ isDark }) => (isDark ? COLORS.textWhite : COLORS.textBlack)};
  display: flex;
  justify-content: center;
  gap: 5px;
  z-index: 2;
  flex-direction: column;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  background-color: ${({ isDark }) =>
    isDark ? COLORS.darkBlue : COLORS.textWhite};

  ${StyledTypography}:last-child {
    width: 100%;
    text-align: right;
  }
`;

export const StyledTomoeCircle = styled.div<{ isReview: boolean }>`
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
  margin-left: ${({ isReview }) => (isReview ? "0" : "50%")};
  left: ${({ isReview }) => (isReview ? "60px" : "-25px")};
`;
