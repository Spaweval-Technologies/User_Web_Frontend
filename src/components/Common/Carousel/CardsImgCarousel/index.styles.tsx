"use client";
import styled from "styled-components";
import { CarouselWrapper } from "../Carousel/index.styles";

export const CardsCarousel = styled(CarouselWrapper)`
  padding: 0;
  margin: 0;
  width: 100%;
  border-radius: 10px 10px 0 0;

  .keen-slider__slide {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 100%;
      min-width: 100% !important;
      max-width: 100% !important;
      height: 266px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      height: 303px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;
