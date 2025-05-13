"use client";
import styled from "styled-components";

export const SliderWrapper = styled.section<{ showSlider?: boolean }>`
  display: ${({ showSlider }) => (showSlider ? "flex" : "none")};
  flex-direction: column;
  width: 80%;
  height: 100vh;
  gap: 8px;

  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 11;

  & > img {
    margin: 12px 20px;
  }
`;

export const Backdrop = styled.div<{ showSlider?: boolean }>`
  display: ${({ showSlider }) => (showSlider ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.transparentDark};
  z-index: 10;
`;
