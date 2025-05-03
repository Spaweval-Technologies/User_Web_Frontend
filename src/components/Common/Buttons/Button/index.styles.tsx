// components/Button.tsx
'use client';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 14px 30px;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1;
  height: fit-content;
`;

export default StyledButton;
