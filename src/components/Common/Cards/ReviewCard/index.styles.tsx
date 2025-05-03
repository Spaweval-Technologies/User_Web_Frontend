"use client";
import styled from "styled-components";
import Icon from "../../Icon";

export const CardWrapper = styled.div`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.neutralGray};
  border-radius: 15px;
  padding: 23px 41px 16px 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 311px;
  width: 311px;
  box-sizing: border-box;
  min-height: 395px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 300px;
    min-width: 300px;
    padding: 22px 39px 15px 25px;
    min-height: 381px;
  }
`;

export const ProfileImg = styled(Icon)`
  border-radius: 50%;
  margin-bottom: 8px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Name = styled.text`
  font-size: 25px;
  line-height: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Location = styled.p`
  font-size: 16px;
  line-height: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;
