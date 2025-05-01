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
  -ms-overflow-style: none;  /* Internet Explorer and Edge */
  scrollbar-width: none;     /* Firefox */

  &::-webkit-scrollbar {
    display: none;           /* Chrome, Safari, and Opera */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
   padding: 0 20px;
  }
`;
