import React from "react";
import { Image } from "../../atoms/Image/ui";
import {
  StyledIntroBlockWrapper,
  StyledIntroLeftBlock,
  StyledIntroRightBlock,
  StyledIntroTextBlock,
  StyledWavesBlock,
} from "./styled";
import coffeeCup from "../../../assets/images/coffeeCup.png";
import waves from "../../../assets/images/waves.png";
import { Typography } from "../../atoms/Typography/ui";

export const IntroBlock: React.FC = () => {
  return (
    <StyledIntroBlockWrapper>
      <StyledIntroLeftBlock />
      <StyledIntroRightBlock>
        <Image src={coffeeCup} alt={coffeeCup} />
        <StyledIntroTextBlock>
          <Typography type="bodyData">Barista Coffee Group</Typography>
          <Typography type="generalTitle">
            Яркий, Свежий, Натуральный
          </Typography>
          <Typography type="bodyData">
            Мы постоянно путешествуем по миру в поисках редких и исключительных
            сортов кофе. Этими открытиями мы любим делиться с вами. Так что вам
            не нужно идти на подвиги ради хорошего кофе!
          </Typography>
        </StyledIntroTextBlock>
        <StyledWavesBlock>
          <Image src={waves} alt={waves} />
        </StyledWavesBlock>
      </StyledIntroRightBlock>
    </StyledIntroBlockWrapper>
  );
};
