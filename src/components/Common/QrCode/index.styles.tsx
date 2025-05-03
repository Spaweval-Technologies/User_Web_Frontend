"use client";
import styled from "styled-components";

export const QrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 16px 30px 25px 28px;
  border-radius: 16px;
  width: 196px;
  height: 191px;
  gap: 16px;
  cursor: pointer;
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
