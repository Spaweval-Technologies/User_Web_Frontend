"use client";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.main`
  overflow: hidden auto;
  max-width: 1440px;
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    align-items: center;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const VerifyWrapper = styled(Wrapper)`
  align-items: center;
`;

export const Img = styled(Image)`
  max-width: 50%;
  width: 50%;
  height: 100%;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
