"use client";
import styled from "styled-components";

export const TitleWrapper = styled.text`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
`;
