import React from "react";
import { StyledImage } from "./styled";

export interface IImage {
  src: string;
  alt: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

export const Image: React.FC<IImage> = ({
  src,
  alt,
  onClick,
  width,
  height,
}) => {
  return (
    <StyledImage
      width={width}
      height={height}
      onClick={onClick}
      draggable="false"
      src={src}
      alt={alt}
    />
  );
};
