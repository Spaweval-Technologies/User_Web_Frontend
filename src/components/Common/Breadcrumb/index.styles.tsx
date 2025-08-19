'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

export const Crumb = styled(Link)`
  font-size: 14px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.bluishGrey};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:last-of-type {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`;

export const Separator = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.bluishGrey};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:last-of-type {
    display: none;
  }
`;
