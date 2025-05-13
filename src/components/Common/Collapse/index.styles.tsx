"use client";
import styled from "styled-components";
import { OutlinedButton } from "../Buttons/OutlinedButton/index.styles";

export const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 40px 14px 8px;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    padding: 14px 16px;
  }
`;

export const Button = styled(OutlinedButton)`
  border: none;
  font-size: 18px;
  line-height: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;

  &:hover,
  &:focus,
  &:active {
    background: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
