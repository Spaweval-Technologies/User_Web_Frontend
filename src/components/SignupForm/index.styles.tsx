"use client";
import styled from "styled-components";
import IconButton from "../Common/Buttons/IconButton";
import Button from "../Common/Buttons/Button";
import Link from "next/link";

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 43px 116px 75px;
  box-sizing: border-box;
  justify-content: flex-start;
  overflow-y: hidden;
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    width: 100%;
    padding: 60px;
    justify-content: flex-start;
    min-height: max-content;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.lg}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    padding: 40px 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 40px 40px 81px;
    width: 100%;
    align-items: center;
    overflow-y: auto;
  }
`;

export const Title = styled.text`
  font-size: 28px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};

  @media (max-width: ${({ theme }) => theme.breakpoints.vsm}) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding-left: 2px;
  width: 100%;
  box-sizing: border-box;
  margin: 35px 0;
`;

export const SignUpWith = styled(IconButton)`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.blueGrey};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  height: max-content;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 23px;
`;

export const Hr = styled.hr`
  border-color: ${({ theme }) => theme.colors.blueGrey};
  width: 47%;
`;

export const Or = styled.span`
  font-size: 14px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  text-transform: uppercase;
`;

export const FieldsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
  margin: 0;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.blueGrey};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 13px;
  padding: 12px 22px 13px 13px;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.bluishGrey}80;
  }
`;

export const Error = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const NameField = styled(Field)`
  width: 50%;
`;

export const Submit = styled(Button)`
  width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  margin: 9px 0 0px;
  font-size: 17px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  padding: 18px 0px;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  &:focus {
    outline: 4px solid ${({ theme }) => theme.colors.transparentDark};
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Text = styled.text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`;

export const StyledLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeights.strong};
  text-decoration: underline;
  margin-left: 4px;
`;

export const ReferalCode = styled.div`
  background: ${({ theme }) => theme.colors.primary}1a;
  border-radius: 76px;
  border: 1.5px dashed ${({ theme }) => theme.colors.primary};
  width: max-content;
  padding: 8px 9px;
  box-sizing: border-box;
  gap: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Use = styled(Button)`
  font-size: 14px;
  padding: 12px 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;

export const ReferalCodeInput = styled.input`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
  width: fit-content;
  height: fit-content;
  font-size: 17px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.bluishGrey};
  }
`;
