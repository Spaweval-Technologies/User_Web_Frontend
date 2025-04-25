"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    justify-content: flex-start;
  }
`;

export const PageWrapper = styled.main`
  background-image: url("/Images/Top_colors.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1440px;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 768px;
    background-image: url("/Images/HeaderBgMb.svg");
  }
`;
