'use client';
import styled from "styled-components";

export const TimePickerContainer = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

export const TimeSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
`;