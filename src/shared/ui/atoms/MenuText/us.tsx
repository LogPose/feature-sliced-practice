import React from "react";
import { StyledMenuText } from "./styled";

export type TMenuText = {
  onClick?: () => void;
};

export const MenuText: React.FC<TMenuText> = ({ children, onClick }) => {
  return <StyledMenuText onClick={onClick}>{children}</StyledMenuText>;
};
