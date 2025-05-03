"use client";
import styled from "styled-components";
import StyledQrCode from "../Common/QrCode";
import Image from "next/image";
import { GettheApp } from "../Header/index.styles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 22px;
  padding-left: 60px;
  box-sizing: border-box;

  & > *:last-child {
    width: 58%;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    & > *:last-child {
      width: 48%;
      height: 550px;  
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding-left: 0;

    & > *:last-child {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondary};
  width: 39%;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    
      width: 48%;
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SubTitleText = styled.text`
  font-size: 16px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;

export const Title = styled.h1`
  font-size: 60px;
  line-height: 66px;
  max-width: 297px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 54px;
    line-height: 55px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 30px;
  max-width: 574px;
  margin: 16px 0 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 31px;
  }
`;

export const DownloadQr = styled(StyledQrCode)`
  border: 1px solid ${({ theme }) => theme.colors.platinumGray};
  padding: 21px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const DownloadImg = styled(Image)`
  object-fit: cover;
`;

export const GetAppButton = styled(GettheApp)`
  display: flex;
  width: fit-content;
  align-self: flex-start;
  margin-top: 0px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
