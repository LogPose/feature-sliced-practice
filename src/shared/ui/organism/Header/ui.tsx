import React from "react";
import { StyledHeader, StyledHeaderLeftBlock, StyledHeaderRightBlock } from "./styled";
import { HEADER_MENU } from "../../../mocks/mocks";
import { HeaderMenu } from "../../molecules/HeaderMenu/ui";
import logo from '../../../assets/images/logo.png'
import { Image } from "../../atoms/Image/ui";

export const Header: React.FC = () => {
    return(
        <StyledHeader>
            <StyledHeaderLeftBlock />
            <StyledHeaderRightBlock>
                <Image src={logo} alt={logo} />
                <HeaderMenu data={HEADER_MENU} />
            </StyledHeaderRightBlock>
        </StyledHeader>
    )
}