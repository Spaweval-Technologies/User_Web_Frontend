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
  justify-content: center;
`;

export const Title = styled.text`
  font-size: 28px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
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
  border: 1px solid #d8d9e3;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 23px;
`;

export const Hr = styled.hr`
  border-color: #d8d9e3;
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
  margin: 10px 0;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #d8d9e3;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 13px;
  padding: 12px 22px 13px 13px;
  width: 100%;
  box-sizing: border-box;

  &::placeholder{
   color: #9C9FB780;
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

export const CreateAccount = styled(Button)`
  width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  margin: 9px 0 24px;
  font-size: 17px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  padding: 16px 0px;
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
`;

export const LogInLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeights.strong};
  text-decoration: underline;
`;

export const ReferalCode = styled.div`
  background: #20aafb1a;
  border-radius: 76px;
  border: 1.5px dashed #20aafb;
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
  color: #9C9FB7;
  }
`;
