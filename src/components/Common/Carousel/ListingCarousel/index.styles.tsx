"use client";
import styled from "styled-components";

export const ListingCarouselWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const PageNumberWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const PageNumber = styled.button<{ isActive?: boolean }>`
  padding: 8px 12px;
  border-radius: 50%;
  font-size: 22px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.background};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.textSecondary : theme.colors.contrastBg};
  cursor: pointer;
  &:hover {
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.contrastBg : theme.colors.whiteLightGray};
  }
`;

export const WrapperMb = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-y: auto;
  max-height: 620px;
  overscroll-behavior: contain;
  overscroll-behavior-y: auto;
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  .gradient {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 20%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 12.65%,
      ${({ theme }) => theme.colors.background} 59.34%
    );
    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ListingWrapperMb = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  gap: 12px;
`;
