import styled, { css } from "styled-components";
import { ITypography } from "./ui";

export const StyledTypography = styled.p<ITypography>`
  margin: 0;
  padding: 0;
  width: ${({ width }) => (width ? width : "fit-content")};
    ${({ type }) => {
      switch (type) {
        case "generalTitle":
          return css`
            font-family: "Arsenal Bold", sans-serif;
            font-size: 60px;
            line-height: 75px;
          `;
        case "blockHeader":
          return css`
            font-family: "Arsenal Bold", sans-serif;
            font-size: 48px;
            line-height: 60px;
          `;
        case "promoHeader":
          return css`
            font-family: "Arsenal Bold", sans-serif;
            font-size: 30px;
            line-height: 47px;
          `;
        case "nameTitle":
          return css`
            font-family: "Arsenal Bold", sans-serif;
            font-size: 20px;
            line-height: 28px;
          `;
        case "bodyDescription":
          return css`
            font-family: "Gilroy Regular", sans-serif;
            font-size: 18px;
            line-height: 28px;
          `;
        case "bodyDescriptionSmall":
          return css`
            font-family: "Gilroy Semibold", sans-serif;
            font-size: 12px;
            line-height: 18px;
          `;
        case "bodyData":
          return css`
            font-family: "Gilroy Regular", sans-serif;
            font-size: 14px;
            line-height: 16px;
          `;
      }
    }};
`;
