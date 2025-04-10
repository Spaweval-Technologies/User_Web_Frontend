"use client";
import styled from "styled-components";
import Image from "next/image";
import IconButton from "../Common/Buttons/IconButton";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100% !important;
  height: 100vh !important;
  background-image: url("/Images/Top_colors.png");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  overflow: hidden;
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
  padding: 50px 60px;
  box-sizing: border-box;
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
    margin: 24px 0 80px;}
`;

export const Title = styled.h1`
  display: flex;
  min-width: max-content;
  align-items: center;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 78px;
  font-family: "Beauty-Rachela";
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin: 0;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    font-size: 54px;
    line-height: 60px;
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
  margin: 119px 0 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
     margin: 80px 0 0;
     }
`;
