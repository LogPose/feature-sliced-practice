import React from "react";
import { StyledTextButton } from "./styled";

export type TTextButton = {
    onClick?: () => void;
}

export const TextButton: React.FC<TTextButton> = ({ onClick, children}) => {
    return(
        <StyledTextButton onClick={onClick}>{children}</StyledTextButton>
    )
}