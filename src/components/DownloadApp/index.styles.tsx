'use client';
import styled from "styled-components";
import StyledQrCode from "../Common/QrCode";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 22px;
  padding-left: 60px;
  box-sizing: border-box;

  &> *:last-child {
   width: 58%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({theme}) => theme.colors.secondary};
  width: 39%;
`;

export const SubTitle = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
`

export const SubTitleText = styled.text`
  font-size: 16px;
  line-height: 1;
  font-weight: ${({theme}) => theme.fontWeights.bolder};
`;

export const Title = styled.h1`
 font-size: 60px;
 line-height: 66px;
 max-width: 297px;
font-weight: ${({theme}) => theme.fontWeights.bolder};
`;

export const Description = styled.p`
 font-size: 16px;
 line-height: 30px;
max-width: 574px;
margin: 16px 0 36px;
`

export const DownloadQr = styled(StyledQrCode)`
border: 1px solid #D2D2D7;
padding: 21px;
`

export const DownloadImg = styled(Image)`
`