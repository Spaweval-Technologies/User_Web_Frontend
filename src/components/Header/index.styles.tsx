"use client";
import styled from "styled-components";
import Image from "next/image";
import IconButton from "../Common/Buttons/IconButton";
import Icon from "../Common/Icon";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% !important;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Logo = styled(Icon)`
  object-fit: cover;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  top: -100px;
  left: 0;
  width: 1956px;
  height: 756px;
  object-fit: cover;
  z-index: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px 60px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1062px;
  padding: 41px 0 177px;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    max-width: 700px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 24px 0 119px;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    margin: 24px 0 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 60px 0 29px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  display: flex;
  min-width: max-content;
  align-items: center;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 78px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin: 0;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    font-size: 54px;
    line-height: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
    line-height: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.vsm}) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.p`
  display: flex;
  align-items: center;
  font-style: italic;
  font-size: 50px;
  font-weight: ${({ theme }) => theme.fontWeights.lighter};
  line-height: 78px;
  text-decoration-style: solid;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin: 0 24px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
    line-height: 36px;
    margin: 0 12px 0 0;
  }
`;

export const AppDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 119px 0 0;
  min-height: 191px;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    margin: 80px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 74px 0 0;
  }
`;

export const GettheApp = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  background-color: ${({ theme }) => theme.colors.contrastBg};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 40px;
  padding: 17px 30px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px 32px;
    font-size: 15px;
    line-height: 15px;
    align-self: center;
    margin-top: 74px;
  }
`;

export const BusinessButton = styled(IconButton)`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  height: fit-content;
`;
