"use client";
import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;
