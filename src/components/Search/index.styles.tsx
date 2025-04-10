'use client';
import styled from "styled-components";

export const SearchWrapper = styled.div`
  border: 6px solid rgba(0,0,0, 0.015);
  border-radius: 50px;
  max-width: 1030px;
  width: 100%;
  box-shadow: 1px 4px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 9px 0px 0px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 60%;
  justify-content: space-evenly;
  `;