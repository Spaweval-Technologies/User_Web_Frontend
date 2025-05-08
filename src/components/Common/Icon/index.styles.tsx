import Image from "next/image";
import styled from "styled-components";

export const IconWrapper = styled(Image)<{
  mobilewidth?: number;
  mobileheight?: number;
  height: number,
  width: number
}>`
  cursor: pointer;
  color: ${({ color }) => color || "inherit"};
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ mobilewidth, width }) => mobilewidth || width}px;
    height: ${({ mobileheight, height }) => mobileheight || height}px;
  }
`;
