"use client";
import styled, { css } from "styled-components";
import Icon from "../Icon";

const transitionStyles = css`
  transition: all 0.3s ease;
`;

export const GroupOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const Hr = styled.hr`
 height: 1px;
 border-top: 1px solid ${({theme}) => theme.colors.lightBlue};
 margin: 12px 22px 12px 16px;
 box-sizing: border-box;
`;

export const GroupLabel = styled.div`
  padding: 8px 16px;
  font-size: 20px;
  font-weight: ${({theme}) => theme.fontWeights.bolder};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.background};
  pointer-events: none;
`;

export const DropdownWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const SelectedValue = styled.div`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 27px;
  background-color: ${({theme}) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  font-weight: ${({theme}) => theme.fontWeights.bold};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${transitionStyles}

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DropdownList = styled.ul<{direction?: "left" | "right" }>`
  position: absolute;
  left: auto;
  min-width: 100%;
  width: max-content;
  margin-top: 8px;
  ${(props) => (props.direction === "left" ? "right: 0;" : "left: 0;")}
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  ${transitionStyles}
`;

export const DropdownItem = styled.li<{child?: boolean}>`
  padding: ${(props) => props.child ? '0 12px': '12px 16px'};
  font-size: 16px;
  font-weight: ${({theme}) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  ${transitionStyles}

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const ArrowIcon = styled(Icon)`
  margin-left: 8px;
  ${transitionStyles}
  pointer-events: none;
`;
