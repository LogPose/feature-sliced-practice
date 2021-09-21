import styled from "styled-components";
import { IImage } from "./ui";

export const StyledImage = styled.img<IImage>`
  user-select: none;
  width: ${({ width }) => width ? width : "100%"}
  width: ${({ height }) => height ? height : "100%"}
`;