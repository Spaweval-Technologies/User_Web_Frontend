"use client";
import styled from "styled-components";
import "keen-slider/keen-slider.min.css";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const TitleWrapper = styled.text`
  padding-left: 60px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 25px;
    padding: 20px 0 0 20px;
  }
`;

export const CarouselMobileWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  gap: 16px;
  margin: 26px 0 52px 20px;
  min-height: max-content;
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
