import React from "react";
import { Image } from "../../atoms/Image/ui";
import {
  InfoBlockWrapper,
  StyledStatisticsBlock,
  StyledStatisticWrapper,
  StyledTextBlock,
  StyledWavesBlock,
} from "./styled";
import kettle from "../../../assets/images/kettle.png";
import { Typography } from "../../atoms/Typography/ui";
import { TextButton } from "../../atoms/TextButton/ui";
import waves from "../../../assets/images/waves.png";

export const InfoBlock: React.FC = () => {
  return (
    <InfoBlockWrapper>
      <Image src={kettle} alt={kettle} />
      <StyledTextBlock>
        <Typography width="350px" type="blockHeader">
          Стремимся Быть Лучшими
        </Typography>
        <Typography type="bodyData">
          Мы работаем с сентября 2013 года. За это время мы успели не только
          полюбиться нашим гостям, но и добиться немалых успехов в кофейном
          бизнесе ...
        </Typography>
        <StyledStatisticsBlock>
          <StyledStatisticWrapper>
            <Typography type="generalTitle">10</Typography>
            <Typography type="bodyData">сортов кофе</Typography>
          </StyledStatisticWrapper>
          <StyledStatisticWrapper>
            <Typography type="generalTitle">30</Typography>
            <Typography type="bodyData">городов России</Typography>
          </StyledStatisticWrapper>
          <StyledStatisticWrapper>
            <Typography type="generalTitle">9</Typography>
            <Typography type="bodyData">фирменных аппаратов</Typography>
          </StyledStatisticWrapper>
        </StyledStatisticsBlock>
        <TextButton>ВСЕ ДОСТИЖЕНИЯ</TextButton>
      </StyledTextBlock>
      <StyledWavesBlock>
        <Image src={waves} alt={waves} />
      </StyledWavesBlock>
    </InfoBlockWrapper>
  );
};
