import React from "react";
import { Typography } from "../../atoms/Typography/ui";
import { ReviewBlockWrapper, StyledWavesBlock } from "./styled";
import { REVIEWS } from "../../../mocks/mocks";
import { Review } from "../../molecules/Review/ui";
import waves from "../../../assets/images/waves.png";
import { Image } from "../../atoms/Image/ui";

export const ReviewBlock: React.FC = () => {
  return (
    <ReviewBlockWrapper>
      <Typography type="blockHeader">Что о нас говорят?</Typography>
      <Review isDark={true} reviewsData={REVIEWS} />
      <StyledWavesBlock>
        <Image src={waves} alt={waves} />
      </StyledWavesBlock>
    </ReviewBlockWrapper>
  );
};
