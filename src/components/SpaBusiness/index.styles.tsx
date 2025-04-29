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

  & > *:last-child {
    width: 70%;
    height: 700px;
  }
`;

export const Content = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 60px;
  line-height: 70px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  max-width: 280px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 16px 0 20px;
  max-width: 559px;
`;

export const FindMore = styled(IconButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 50px;
  padding: 17px 32px;
  width: fit-content;
  gap: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;
