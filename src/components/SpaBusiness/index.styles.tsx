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
  border-bottom: 1px solid ${({theme}) => theme.colors.lightSilver};

  & > *:last-child {
    width: 70%;
    height: 700px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 0px;
    flex-direction: column;

    & > *:last-child {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: 0 20px;
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
  object-fit: cover;
`;
