import React from "react";
import { goToLink } from "../../../../features/Page/link";
import { MenuText } from "../../atoms/MenuText/us";
import { Typography } from "../../atoms/Typography/ui";
import { FooterMenuWrapper, StyledFooterMenu } from "./styled";

export type TFooterMenuData = {
    data: {
        id: string;
        header: string;
        points: {
          id: string;
          text: string;
          href: string;
        }[];
    }[];
};

export const FooterMenu: React.FC<TFooterMenuData> = ({data}) => {

  return (
    <FooterMenuWrapper>
      {data.map((data) => {
        return (
          <StyledFooterMenu>
            <Typography type="bodyDescription">{data.header}</Typography>
            {data.points.map((el) => {
              return <MenuText onClick={() => goToLink(el.href)}>{el.text}</MenuText>;
            })}
          </StyledFooterMenu>
        );
      })}
    </FooterMenuWrapper>
  );
};
