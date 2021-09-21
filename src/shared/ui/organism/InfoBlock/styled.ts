import styled from "styled-components";

export const InfoBlockWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 270px;
  display: flex;
  margin-top: 60px;
  position: relative;
`;

export const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  box-sizing: border-box;
  gap: 40px;
`;

export const StyledStatisticsBlock = styled.div`
  display: flex;
  gap: 18px;
`;

export const StyledStatisticWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledWavesBlock = styled.div`
  position: absolute;
  bottom: -30px;
  left: 210px;
  z-index: 2;
`;
