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
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1440px;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 768px;
  }
`;

export const WrapperBg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("/Images/Top_colors.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    background-image: url("/Images/HeaderMbBg.png");
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url("/Images/Bottom_colors.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url("/Images/FooterMbBg.png");
  }
`;
