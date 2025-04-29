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
    background: ${({theme}) => theme.colors.transparent};
    cursor: pointer;
    box-shadow: none;
    padding: 15px 13px 15px 27px;
    margin:0;
    min-height: 100%;
    height: 100%;

    &:hover,
    &:focus,
    &:active {
      border: none;
      background: ${({theme}) => theme.colors.grey};
    }

    @media (max-width: 768px) {
      border: 1px solid ${({theme}) => theme.colors.greyBorder};
      border-radius: 0;
    }
  }

  .react-select__control--menu-is-open {
    background: ${({theme}) => theme.colors.grey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;
