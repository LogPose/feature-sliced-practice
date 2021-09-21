import React from "react";
import { Image } from "../../atoms/Image/ui";
import { Typography } from "../../atoms/Typography/ui";
import {
  StyledQuoteWrapper,
  StyledReview,
  StyledTomoeCircle,
  StyledUserAvatar,
  StyledUserBlock,
  StyledUserInfo,
} from "./styled";
import tomoe from "../../../assets/images/tomoe.png";

export type TQuoteReview = {
  isDark: boolean;
  reviewsData: {
    id: string;
    text: string;
    autor: {
      photo: string;
      name: string;
      inst: string;
    };
  }[];
};

export const Review: React.FC<TQuoteReview> = ({
  reviewsData,
  isDark = false,
}) => {
  return (
    <StyledReview>
      {reviewsData.map((review) => {
        return (
          <StyledQuoteWrapper isDark={isDark}>
            <StyledTomoeCircle>
              <Image src={tomoe} alt={tomoe} />
            </StyledTomoeCircle>
            <Typography type="bodyDescription">{review.text}</Typography>
            <StyledUserBlock>
              <StyledUserAvatar>
                <Image src={review.autor.photo} alt={review.autor.name} />
              </StyledUserAvatar>
              <StyledUserInfo>
                <Typography type="nameTitle">{review.autor.name}</Typography>
                <Typography type="bodyData">{review.autor.inst}</Typography>
              </StyledUserInfo>
            </StyledUserBlock>
          </StyledQuoteWrapper>
        );
      })}
    </StyledReview>
  );
};
