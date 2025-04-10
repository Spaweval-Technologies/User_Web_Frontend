'use client';
import styled from 'styled-components';

export const OutlinedButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 12px 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 27px;
  cursor: pointer;
  font-size: 16px;
  min-width: max-content;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: ${({theme}) => theme.colors.secondary} 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;