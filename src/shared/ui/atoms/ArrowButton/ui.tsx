import React from "react";
import { StyledArrowButton } from "./styled";

export type TArrowButton = {
    onClick?: () => {}
}

export const ArrowButton: React.FC<TArrowButton> = ({onClick}) => {
    return(
        <StyledArrowButton onClick={onClick} />
    )
}