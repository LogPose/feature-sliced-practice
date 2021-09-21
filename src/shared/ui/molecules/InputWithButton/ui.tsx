import React from "react";
import { ArrowButton } from "../../atoms/ArrowButton/ui";
import { Input } from "../../atoms/Input/ui";
import { StyledInputWithButton } from "./styled";

export type TInputWithButton = {
  placeholder?: string;
  onClick?: () => {};
};

export const InputWithButton: React.FC<TInputWithButton> = ({
  placeholder,
  onClick,
}) => {
  return (
    <StyledInputWithButton>
      <Input placeholder={placeholder} />
      <ArrowButton onClick={onClick} />
    </StyledInputWithButton>
  );
};
