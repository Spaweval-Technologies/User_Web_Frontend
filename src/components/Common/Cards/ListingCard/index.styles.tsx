"use client";
import Image from "next/image";
import styled from "styled-components";

export const ListingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  max-width: 324px;
  min-width: 324px;
  height: 394px;
  min-height: 394px;
  max-height: 394px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.colors.blueGrey};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 20px ${({ theme }) => theme.colors.transparentDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 410px;
    min-width: 100%;
    max-width: 100%;
    min-height: 410px;
    max-height: 410px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.sm}) and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 49%;
    height: 400px;
    min-width: 49%;
    max-width: 49%;
    min-height: 400px;
    max-height: 400px;
  }
`;

export const CardImage = styled(Image)`
  border-radius: 10px 10px 0 0;
  width: 100%;
  min-height: 266px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 303px;
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 16px 20px 18px 13px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 16px 19px 20px 16px;
  }
`;

export const Title = styled.text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p`
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme}) => theme.colors.bluishGrey};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 11px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Hr = styled.div`
  border-left: 1px solid ${({theme}) => theme.colors.lightSilver};
  height: 21px;
  margin: 0 9px 0 12px;
`;

export const Discount = styled.text`
  font-size: 16px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  font-family: Poppins;

  & > span {
    font-family: Raleway;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;
