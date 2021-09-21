import styled from "styled-components";

export const GaleryBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  gap: 30px;
  justify-content: center;
`;

export const StyledPhotoBlock = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  position: relative;
`;

export const StyledSmallPhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledWavesBlock = styled.div`
  position: absolute;
  bottom: -30px;
  left: 70px;
  z-index: 2;
`;

export const StyledQuoteBlock = styled.div`
  position: absolute;
  bottom: -100px;
  right: 220px;
  z-index: 2;
`;

export const StyledButtonBlock = styled.div`
  margin-top: 50px;
  padding-left: 100px;
`;