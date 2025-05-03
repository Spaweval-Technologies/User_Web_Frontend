"use client";
import styled from "styled-components";

export const SearchWrapper = styled.div`
  outline: 6px solid ${({theme}) => theme.colors.transparentWhite};
  border-radius: 50px;
  max-width: 1030px;
  width: 100%;
  box-shadow: 1px 4px 20px 0px ${({theme}) => theme.colors.transparentGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 9px 0px 0px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 78%;
  position: relative;
  min-height: max-content;

  & > *:first-child {
    width: 35%;
  }

  & > *:nth-child(3),
  & > *:nth-child(5) {
    width: 32%;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    width: 80%;
  }
`;
