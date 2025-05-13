"use client";
import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.lightPastelBlue};
  padding: 14px 20px 13px 15px;
  min-width: 591px;
  width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 243px;
    padding: 7px 13px 6px 8px;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    min-width: 150px;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.lg}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    min-width: 50%;
  }
`;

export const Input = styled.input`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.bluishGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 10px;
  }
`;
