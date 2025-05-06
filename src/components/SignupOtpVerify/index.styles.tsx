"use client";
import styled from "styled-components";
import { OutlinedButton } from "../Common/Buttons/OutlinedButton/index.styles";

export const SentCode = styled.span`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const CodeInput = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 72px 0 55px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 63px 0 55px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.vsm}) {
    gap: 8px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  outline: none;
  padding: 7px 14px 7px 16px;
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  font-family: Poppins;
  width: fit-content;
  max-width: 48px;
  box-sizing: border-box;
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.vsm}) {
    font-size: 24px;
    padding: 7px 12px;
  }
`;

export const Timer = styled.text`
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  font-size: 22px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 28px 0;

  @media (max-width: ${({theme})=> theme.breakpoints.md}){
   margin: 28px 0 23px;
  }
`;

export const Resend = styled(OutlinedButton)`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.blueGrey};
  width:100%;
   
  &:focus {
    outline: 4px solid ${({ theme }) => theme.colors.transparentDark};
  }
`;
