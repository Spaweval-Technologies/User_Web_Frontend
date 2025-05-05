"use client";
import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  gap: 20px;
  justify-content: space-evenly;
  overflow-x: auto;
  min-height: max-content;
  padding-left: 60px;
  box-sizing: border-box;
  margin-bottom: 70px;
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: inherit;
    justify-content: inherit;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    margin-bottom: 40px;
    overflow-y: auto;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  overflow: auto;
  cursor: pointer;
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    overflow-x: hidden;
    max-width: 100%;
    max-height: 550px;
    min-height: 550px;
    height: 550px;
    position: relative;
  }
`;

export const Gradient = styled.div`
  diplay: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    position: absolute;
    bottom: 0%;
    left: 20px;
    width: calc(100% - 40px);
    height: 25%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 12.65%,
      ${({ theme }) => theme.colors.background} 59.34%
    );
    z-index: 10;
  }
`;
