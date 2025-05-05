"use client";
import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin:0;
  min-height: 100%;
  flex-1;

  .react-select__control {
    border: none;
    border-radius: 50px 0 0 50px;
    background: ${({ theme }) => theme.colors.transparent};
    cursor: pointer;
    box-shadow: none;
    padding: 22px 13px 21px 27px;
    margin:0;
    min-height: 100%;
    height: 100%;
    gap: 23px;
    box-sizing: border-box;

    &:hover,
    &:focus,
    &:active {
      border: none;
      background: ${({ theme }) => theme.colors.grey};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      border: 1px solid ${({ theme }) => theme.colors.greyBorder};
      border-radius: 5px;
      padding: 7px 13px;
      min-height: 40px;
    }
  }

  .react-select__placeholder {
    font-size: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 14px;
      line-height: 1;
    }
  }

  .react-select__control--menu-is-open {
    background: ${({ theme }) => theme.colors.grey};
  }

  .react-select__value-container {
    padding: 0;
    font-size: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 14px;
      line-height: 1;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;
