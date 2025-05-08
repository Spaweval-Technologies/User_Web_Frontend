"use client";
import Link from "next/link";
import styled from "styled-components";
import Button from "../Buttons/Button";

export const NotificationWrapper = styled.div<{ show?: boolean }>`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: 22px 20px 23px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.darkBlue};
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.vsm}) {
    pading: 20px 8px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 51px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.vsm}) {
    gap: 6px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Text = styled.text`
  font-size: 12px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.vsm}) {
    font-size: 10px;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;

export const InstallBtn = styled(Button)`
  border-radius: 5px;
  height: fit-content;
  font-size: 11px;
`;
