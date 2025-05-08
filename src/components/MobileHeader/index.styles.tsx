"use client";
import styled from "styled-components";
import Button from "../Common/Buttons/Button";
import Link from "next/link";
import IconButton from "../Common/Buttons/IconButton";

export const MobileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 20px 77px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MbHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  max-width: 100%;
  outline: 4px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 1px 4px 20px 0px rgba(0, 0, 0, 0.1);
  padding: 24px 20px;
  box-sizing: border-box;
`;

export const SearchBtn = styled(Button)`
  width: 100%;
  border-radius: 5px;
  margin-top: 22px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  margin-top: 22px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const ListTitle = styled.text`
  colors: ${({ theme }) => theme.colors.secondary};
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  margin: 30px 0 6px;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const ListItemLink = styled(Link)`
  display: flex;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 12px;
  cursor: pointer;
`;

export const StyledIconBtn = styled(IconButton)`
  gap: 9px;
  height: fit-content;
  padding: 0;
`;
