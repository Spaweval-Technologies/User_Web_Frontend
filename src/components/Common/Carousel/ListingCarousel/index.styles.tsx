"use client";
import { Gradient } from "@/components/Categories/index.styles";
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
  position: relative;
  overflow-y: auto;
  max-height: 500px;
  min-height: 500px;
  height: 500px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
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

export const StyledGradient = styled(Gradient)`
  left: 0;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
`;
