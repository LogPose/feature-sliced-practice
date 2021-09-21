import React from "react";
import { Image } from "../../atoms/Image/ui";
import { Typography } from "../../atoms/Typography/ui";
import { StyledQuoteWrapper, StyledTomoeCircle } from "./styled";
import tomoe from "../../../assets/images/tomoe.png";

export type TQuoteReview = {
  textName: string;
  textQuote?: string;
  textReview?: string;
  isReview: boolean;
  isDark: boolean;
};

export const QuoteReview: React.FC<TQuoteReview> = ({
  textName,
  textQuote,
  isReview = false,
  isDark = false,
}) => {
  return (
    <StyledQuoteWrapper isReview={isReview} isDark={isDark}>
      <StyledTomoeCircle isReview={isReview}>
        <Image src={tomoe} alt={tomoe} />
      </StyledTomoeCircle>
      <Typography type="bodyDescription">{textQuote}</Typography>
      <Typography type="nameTitle">{textName}</Typography>
    </StyledQuoteWrapper>
  );
};
