import styled from "styled-components";

export const StyledIntroBlockWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledIntroRightBlock = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const StyledIntroLeftBlock = styled.div`
  min-width: 270px;
  height: 100%;
`;

export const StyledIntroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 80px;
  gap: 40px;
  width: 550px;
  justify-content: center;
`;

export const StyledWavesBlock = styled.div`
  position: absolute;
  bottom: -30px;
  left: -30px;
  z-index: 2;
`;
