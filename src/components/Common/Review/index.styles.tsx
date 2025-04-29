"use client";
import styled from "styled-components";

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewCount = styled.span`
  display: flex;
  align-items: center;
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.deepViolet};
`;

export const Ratting = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
`;
