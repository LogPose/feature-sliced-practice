import React from "react";
import { Image } from "../../atoms/Image/ui";
import { Typography } from "../../atoms/Typography/ui";
import {
  MenuBlockWrapper,
  StyledButtonBlock,
  StyledGaleryBlock,
  StyledTextBlock,
  StyledWavesBlock,
} from "./styled";
import iceCoffee from "../../../assets/images/iceCoffee.png";
import blackCoffee from "../../../assets/images/blackCoffee.png";
import loveCoffee from "../../../assets/images/loveCoffee.png";
import croissantCoffee from "../../../assets/images/croissantCoffee.png";
import waves from "../../../assets/images/waves.png";
import { TextButton } from "../../atoms/TextButton/ui";

export const MenuBlock: React.FC = () => {
  return (
    <MenuBlockWrapper>
      <StyledTextBlock>
        <Typography width="400px" type="blockHeader">
          Что выбирают наши гости
        </Typography>
        <Typography width="400px" type="bodyData">
          В нашем меню представлен большой выбор классического кофе, чая,
          горячих напитков, завтраков и десертов.
        </Typography>
      </StyledTextBlock>
      <StyledGaleryBlock>
        <Image src={iceCoffee} alt={iceCoffee} />
        <Image src={blackCoffee} alt={blackCoffee} />
        <Image src={loveCoffee} alt={loveCoffee} />
        <Image src={croissantCoffee} alt={croissantCoffee} />
        <StyledWavesBlock>
          <Image src={waves} alt={waves} />
        </StyledWavesBlock>
      </StyledGaleryBlock>
      <StyledButtonBlock>
        <TextButton>СМОТРЕТЬ МЕНЮ</TextButton>
      </StyledButtonBlock>
    </MenuBlockWrapper>
  );
};
