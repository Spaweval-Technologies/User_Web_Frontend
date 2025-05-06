"use clients";
import styled from "styled-components";
import IconButton from "../Common/Buttons/IconButton";
import Image from "next/image";

export const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
  display: flex;
  padding-left: 60px;
  box-sizing: border-box;
  min-height: max-content;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightSilver};

  & > img {
    width: 60%;
    height: 700px;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    & > img {
      width: 50%;
      height: 550px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 0px;
    flex-direction: column;

    & > img {
      width: 100%;
      height: 297px;
    }
  }
`;

export const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h2`
  font-size: 60px;
  line-height: 70px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  max-width: 280px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 54px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 16px 0 20px;
  max-width: 559px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }
`;

export const FindMore = styled(IconButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 50px;
  padding: 15px 32px;
  width: fit-content;
  gap: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  height: fit-content;
`;

export const Ratting = styled.div`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 41px;
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin: 13px 0;
`;

export const Review = styled.p`
  color: ${({ theme }) => theme.colors.secondary}50;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold}s;
`;

export const BusinessImg = styled(Image)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const BusinessLaptopImgMb = styled(Image)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    object-fit: none;
    height: max-content;
  }
`;
