import React from "react";
import { TextButton } from "../../atoms/TextButton/ui";
import { Typography } from "../../atoms/Typography/ui";
import { QuoteReview } from "../../molecules/QuoteReview/ui";
import {
  MissionBlockWrapper,
  StyledMissionLeftBlock,
  StyledMissionRightBlock,
  StyledMissionTextBlock,
  StyledQuoteBlock,
  StyledWavesBlock,
} from "./styled";
import barista from "../../../assets/images/baristaMan.png";
import waves from "../../../assets/images/waves.png";
import { Image } from "../../atoms/Image/ui";

export const MissionBlock: React.FC = () => {
  return (
    <MissionBlockWrapper>
      <StyledMissionLeftBlock />
      <StyledMissionRightBlock>
        <StyledMissionTextBlock>
          <Typography type="blockHeader">Качество в каждой кружке</Typography>
          <Typography type="bodyData">
            Наша миссия - это популяризация потребления зернового кофе в России.
            Мы работаем для того, чтобы каждый мог насладиться этим изысканным
            напитком ...
          </Typography>
          <TextButton>УЗНАТЬ БОЛЬШЕ</TextButton>
        </StyledMissionTextBlock>
        <Image width="420px" height="400px" src={barista} alt={barista} />
        <StyledQuoteBlock>
          <QuoteReview
            textName="Иммануил Кант"
            textQuote="Кофе — это просто счастье… И это счастье можно пить…"
            isReview={false}
            isDark={false}
          />
        </StyledQuoteBlock>
        <StyledWavesBlock>
          <Image src={waves} alt={waves} />
        </StyledWavesBlock>
      </StyledMissionRightBlock>
    </MissionBlockWrapper>
  );
};
