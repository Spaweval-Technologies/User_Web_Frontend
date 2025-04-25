"use client";
import styled from "styled-components";
import "keen-slider/keen-slider.min.css";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
`;

export const TitleWrapper = styled.text`
  padding-left: 60px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
  box-sizing: border-box;
`;

export const CarouselWrapper = styled.div`
  margin: 34px 0 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: max-content;
  padding: 34px 60px 0;
  box-sizing: border-box;
  overflow: hidden;
  overflow-x: auto;
  position: relative;
  
  .keen-slider {
    overflow: hidden;
    display: flex;
    width: 100%; // adapt to card width
    height: fit-content;
  }

  .keen-slider__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-width: fit-content !important;
    max-width: fit-content !important;
    height: fit-content;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    cursor: pointer;
  }

  .arrow--disabled {
    display: none;
  }

  .left-arrow {
    left: 35px;
  }

  .right-arrow {
    left: auto;
    right: 35px;
  }
`;
