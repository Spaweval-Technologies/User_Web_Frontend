"use client";
import styled from "styled-components";
import { OutlinedButton } from "../Common/Buttons/OutlinedButton/index.styles";

export const TimePickerContainer = styled.div`
  position: relative;
  min-height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const TimeSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
`;

export const Button = styled(OutlinedButton)`
  border: 1px solid ${({ theme }) => theme.colors.lightPastelBlue};
  padding: 12px 16px;

  &:focus,
  &:active,
  &:hover {
    background: ${({ theme }) => theme.colors.deepSkyBlue};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:active {
    outline: 6px solid ${({ theme }) => theme.colors.transparentDark};
  }
`;
