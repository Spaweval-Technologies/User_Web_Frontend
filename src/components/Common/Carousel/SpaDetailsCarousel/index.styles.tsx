import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  width: 66%;
  max-width: 66%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
    position: absolute;
    top: 60%;
    width: 100%;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
    max-width: 100%;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 100%;

  .keen-slider__slide {
    border-radius: 10px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 403px;
    min-height: 403px;
    max-height: 403px;

    & > img {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      height: 403px;
      min-height: 403px;
      max-height: 403px;
    }
  }

  .keen-slider__slide.active {
    border: 2px solid #0070f3;
    opacity: 1;
    border-radius: 10px;
  }

  .thumbnail .keen-slider__slide {
    cursor: pointer;
    opacity: 0.5;
    border-radius: 10px;
    height: 217px;

    & > img {
      border-radius: 10px;
    }
  }

  .thumbnail .keen-slider__slide.active {
    opacity: 1;
  }

  .thumbnail-slider {
    width: 431px !important;
    min-width: 431px !important;
    max-width: 431px !important;
    cursor: pointer;
    border-radius: 10px;
    height: 218px;
    min-height: 218px;
    max-height: 218px;

    & > img {
      width: 431px !important;
      min-width: 431px !important;
      max-width: 431px !important;
      cursor: pointer;
      border-radius: 10px;
      height: 218px;
      min-height: 218px;
      max-height: 218px;
    }
  }
`;
