"use client";
import Image from "next/image";
import styled from "styled-components";
import { OutlinedButton } from "../../Buttons/OutlinedButton/index.styles";

export const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 23px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 20px ${({ theme }) => theme.colors.transparentDark};
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  width: 384px;
  height: 318px;
  min-width: 384px;
  max-width: 384px;
  min-height: 318px;

  &:hover {
    overflow: hidden;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 371px;
    min-width: 371px;
    max-width: 371px;
    height: 307px;
    min-height: 307px;
    max-height: 307px;
  }
`;

export const CategoryCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: all 0.3s ease-in-out;
    filter: blur(1px);
  }
`;

export const Title = styled.h3<{ color?: string }>`
  font-size: 30px;
  line-height: 50px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme, color }) =>
    color === "black" ? theme.colors.text : theme.colors.textSecondary};
  z-index: 2;
`;

export const Description = styled.p<{ color?: string }>`
  font-size: 15px;
  color: ${({ theme, color }) =>
    color === "black" ? theme.colors.text : theme.colors.textSecondary};
  line-height: 1;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  z-index: 2;
  margin-bottom: 13px;
`;

export const BookNow = styled(OutlinedButton)<{ color?: string }>`
  z-index: 2;
  width: fit-content;
  font-size: 16px;
  border-radius: 50px;
  line-height: 1;
  padding: 10px 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  color: ${({ theme, color }) =>
    color === "black" ? theme.colors.text : theme.colors.textSecondary};
  border: 1px solid
    ${({ theme, color }) =>
      color === "black" ? theme.colors.text : theme.colors.textSecondary};

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme, color }) =>
      color === "black" ? theme.colors.contrastBg : theme.colors.background};
    color: ${({ theme, color }) =>
      color === "black" ? theme.colors.textSecondary : theme.colors.text};
    border: none;
  }

  &:focus {
    outline: 8px solid ${({ theme }) => theme.colors.transparentLight};
  }
`;
