import Image from "next/image";
import styled from "styled-components";

export const IconWrapper = styled(Image)<{
  mobilewidth?: number;
  mobileheight?: number;
}>`
  cursor: pointer;
  color: ${({ color }) => color || "inherit"};
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ mobilewidth }) => mobilewidth || 24}px;
    height: ${({ mobileheight }) => mobileheight || 24}px;
  }
`;
