import React from "react";
import { StyledTypography } from "./styled";

export interface ITypography {
  type: TypographyType;
  width?: string;
}

export type TypographyType =
  | "generalTitle"
  | "blockHeader"
  | "promoHeader"
  | "nameTitle"
  | "bodyDescription"
  | "bodyDescriptionSmall"
  | "bodyData";

export const Typography: React.FC<ITypography> = ({
  type,
  width,
  children,
}) => {
  return (
    <StyledTypography width={width} type={type}>
      {children}
    </StyledTypography>
  );
};
