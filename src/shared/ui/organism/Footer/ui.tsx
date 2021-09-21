import React from "react";
import { Image } from "../../atoms/Image/ui";
import {
  StyledFooterMenuBlock,
  FooterWrapper,
  StyledSocialMediaBlock,
  StyledFooterText,
  StyledFooterContactsBlock,
} from "./styled";
import logo from "../../../assets/images/logo.png";
import { Typography } from "../../atoms/Typography/ui";
import { FooterMenu } from "../../molecules/FooterMenu/ui";
import { FOOTER_MENUS } from "../../../mocks/mocks";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <StyledFooterMenuBlock>
        <StyledFooterText>
          <Image width="150px" src={logo} alt={logo} />
          <Typography type="bodyDescriptionSmall">
            Мы предлагаем натуральный кофе, чай, холодные напитки, а также
            завтраки. Barista Coffee - это место для уютных посиделок,
            романтических встреч или деловых переговоров. Приходите к нам в
            гости!{" "}
          </Typography>
        </StyledFooterText>
        <FooterMenu data={FOOTER_MENUS} />
        <StyledFooterContactsBlock>
          <Typography type="bodyDescription">+7 (800) 250-77-91</Typography>
          <Typography type="bodyDescription">info@baristacoffee.ru</Typography>
          <Typography type="bodyData">©2020 Barista Coffee Group</Typography>
          <Typography type="bodyData">All rights reserved</Typography>
        </StyledFooterContactsBlock>
      </StyledFooterMenuBlock>
      <StyledSocialMediaBlock></StyledSocialMediaBlock>
    </FooterWrapper>
  );
};
