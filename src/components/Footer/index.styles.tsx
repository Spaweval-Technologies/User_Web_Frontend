"use client";
import Link from "next/link";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 136px 60px 57px;
  width: 100%;
  box-sizing: border-box;
  gap: 97px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 37px 20px;
  }
`;

export const LogoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const Description = styled.p`
  fotnsize: 14px;
  line-height: 1.53;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 396px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 57px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ListTitle = styled.text`
  font-size: 18px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export const ListItem = styled.li``;

export const ListItemLink = styled(Link)`
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:last-child {
      display: none;
    }
  }
`;

export const HR = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary}20;
  margin: 21px 0 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 19px;
  }
`;

export const Disclaimer = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
`;

export const CopyRightText = styled.text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-family: Oswald;
  font-weight: ${({ theme }) => theme.fontWeights.Regular};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 12px;
  }
`;

export const CopyRightLink = styled(Link)`
  color: #ffb6b6;
`;
