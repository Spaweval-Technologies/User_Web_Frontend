'use client';
import styled from "styled-components";

export const SliderWrapper = styled.section<{showSlider?: boolean}>`
  display: ${({showSlider}) => showSlider ? 'flex': 'none'};
  flex-direction: column;
  width: 90%;
  height: 100vh;
  gap: 8px;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  background: ${({theme}) => theme.colors.background};
  z-index: 10;
`;