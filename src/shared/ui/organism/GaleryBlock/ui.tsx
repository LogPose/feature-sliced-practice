import React from "react";
import { Image } from "../../atoms/Image/ui";
import {
  GaleryBlockWrapper,
  StyledButtonBlock,
  StyledPhotoBlock,
  StyledQuoteBlock,
  StyledSmallPhotoBlock,
  StyledWavesBlock,
} from "./styled";
import handWithCoffee from "../../../assets/images/handWithCoffee.png";
import coffeeWithWater from "../../../assets/images/coffeeWithWater.png";
import something from "../../../assets/images/something.png";
import coffeeExposition from "../../../assets/images/coffeeExposition.png";
import waves from "../../../assets/images/waves.png";
import { QuoteReview } from "../../molecules/QuoteReview/ui";
import { TextButton } from "../../atoms/TextButton/ui";

export const GaleryBlock: React.FC = () => {
  return (
    <GaleryBlockWrapper>
      <StyledPhotoBlock>
        <StyledSmallPhotoBlock>
          <Image src={handWithCoffee} alt={handWithCoffee} />
          <Image src={coffeeWithWater} alt={coffeeWithWater} />
        </StyledSmallPhotoBlock>
        <Image src={something} alt={something} />
        <Image src={coffeeExposition} alt={coffeeExposition} />
        <StyledWavesBlock>
          <Image src={waves} alt={waves} />
        </StyledWavesBlock>
        <StyledQuoteBlock>
          <QuoteReview
            isDark={true}
            isReview={false}
            textName="Дэвид Юм"
            textQuote="Кофе — это удивительный напиток, который согревает весь мир."
          />
        </StyledQuoteBlock>
      </StyledPhotoBlock>
      <StyledButtonBlock>
        <TextButton>ВСЕ ФОТО</TextButton>
      </StyledButtonBlock>
    </GaleryBlockWrapper>
  );
};
