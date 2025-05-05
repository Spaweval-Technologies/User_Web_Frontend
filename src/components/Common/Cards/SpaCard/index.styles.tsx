"use client";
import Image from "next/image";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 307px;
  min-width: 307px;
  max-width: 307px;
  height: 280px;
  min-height: 280px;
  max-height: 280px;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.colors.lightSilver};
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 271px;
    min-width: 271px;
    max-width: 271px;
    height: 248px;
    min-height: 248px;
    max-height: 248px;
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 181px;
  min-height: 181px;
  max-height: 181px;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 160px;
    min-height: 160px;
    max-height: 160px;
  }
`;

export const CardContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 25px;
  box-sizing: border-box;
  gap: 8px;
`;

export const CardTitle = styled.text`
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  font-size: 20px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Ratting = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
`;

export const ReviewCount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.lighter};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
`;

export const CardDescription = styled.text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
`;
