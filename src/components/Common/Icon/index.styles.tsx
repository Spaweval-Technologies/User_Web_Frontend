import Image from "next/image";
import styled from "styled-components";

export const IconWrapper = styled(Image)<{
  mobileWidth?: number;
  mobileHeight?: number;
}>`
  cursor: pointer;
  aspect-ratio: 1;
  color: ${({ color }) => color || "inherit"};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ mobileWidth }) => mobileWidth || 24}px;
    height: ${({ mobileHeight }) => mobileHeight || 24}px;
  }
`;
