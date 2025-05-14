"use client";
import styled from "styled-components";

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

  @media (max-width: 768px) {
    display: none;
  }
`;
