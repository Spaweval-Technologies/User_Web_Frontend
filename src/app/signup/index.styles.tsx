"use client";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.main`
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1440px;
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items:center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;


export const Img = styled(Image)`
 max-width: 50%;
 width: 50%;
 height: 100%;
`;