import React from "react";
import { StyledInput } from "./styled";

export type TInput = {
    placeholder?: string;
}

export const Input: React.FC<TInput> = ({placeholder}) => {
    return(
        <StyledInput placeholder={placeholder} />
    )
}