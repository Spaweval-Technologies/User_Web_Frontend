'use client';
import styled from 'styled-components';

export const StyledIconButton = styled.button`
  padding: 12px 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  min-width: max-content;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  height: 67px;
`;