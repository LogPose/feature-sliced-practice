import React from "react";
import { goToLink } from "../../../../features/Page/link";
import { MenuText } from "../../atoms/MenuText/us";
import { StyledHeaderMenuBlock } from "./styled";

export type TMenuData = {
  data: {
    id: string;
    text: string;
    href: string;
  }[];
};

export const HeaderMenu: React.FC<TMenuData> = ({ data }) => {

  return (
    <StyledHeaderMenuBlock>
      {data.map((el) => {
        return <MenuText onClick={() => goToLink(el.href)}>{el.text}</MenuText>;
      })}
    </StyledHeaderMenuBlock>
  );
};
