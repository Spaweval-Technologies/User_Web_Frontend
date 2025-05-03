"use client";
import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  height: 550px;
  position: relative;
  margin-bottom: 40px;

  .gradient {
    position: absolute;
    bottom: -30px;
    left: 20px;
    width: calc(100% - 40px);
    height: 30%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 12.65%,
     ${({theme}) => theme.colors.background} 59.34%
    );
    z-index: 1;
  }

  .keen-slider {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%; // adapt to card width
    height: fit-content;
    flex-wrap: nowrap !important;
    border-radius: 20px;
    -ms-overflow-style: none; /* Internet Explorer and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Opera */
    }
  }

  .keen-slider__slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 100% !important;
    max-width: 100% !important;
    height: fit-content !important;
    min-height: fit-content !important;
    max-height: fit-content !important;
  }

  .arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    cursor: pointer;
  }

  .arrow--disabled {
    display: none;
  }

  .top-arrow {
    top: -12px;
  }

  .bottom-arrow {
    top: auto;
    bottom: -48px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;
