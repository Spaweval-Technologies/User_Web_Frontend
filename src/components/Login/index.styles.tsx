"use client";
import Link from "next/link";
import styled from "styled-components";

export const RememberPasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0 18px;
  width: 100%;
  max-width: fit-content;
  gap: 8px;
  min-width: -webkit-fill-available;

  & > *:first-child {
    width: fit-content;
  }
`;

export const ForgetPasswordLink = styled(Link)`
  font-size: 13px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  text-decoration: underline;

  @media (max-width: ${({ theme }) => theme.breakpoints.vsm}) {
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
