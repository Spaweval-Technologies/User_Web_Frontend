"use client";
import styled from "styled-components";

export const Select = styled.select`
  width: max-content;
  padding: 12px 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 27px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: ${({theme}) => theme.colors.secondary} 0.3s ease, color 0.3s ease;
  appearance: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const ArrowIcon = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 27px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondaryText};
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondaryText};
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    pointer-events: none;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.colors.secondary};
    pointer-events: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: bold;
    opacity: 0.5;
  }
  &:focus::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }
  &:active::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }
`;
export const Option = styled.option`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  font-weight: bold;
  padding: 12px 10px;
  border-radius: 27px;
  cursor: pointer;
  transition: ${({theme}) => theme.colors.secondary} 0.3s ease, color 0.3s ease;
 &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.sendaryText};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondaryText};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: bold;
    opacity: 0.5;
  }
  &:focus::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
    opacity: 1;
  }
  &:active::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: bold;
    padding: 12px 10px;
    border-radius: 27px;
    cursor: not-allowed;
    transition: ${({ theme }) => theme.colors.secondary} 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.secondary};
    }
    &:focus {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.secondary};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.secondary};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 16px;
      font-weight: bold;
      opacity: 0.5;
    }
    &:focus::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.5;
    }
    &:active::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.5;
    }
  }
  &:disabled::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: bold;
    opacity: 0.5;
  }
  &:disabled:focus::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
