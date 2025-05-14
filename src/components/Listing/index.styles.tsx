"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding: 0 40px 100px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 0 20px 20px;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    padding: 0 40px 60px;
  }
`;

export const FiltersWrapper = styled.aside`
  max-width: 275px;
  width: 22%;
  border-radius: 10px;
  margin-top: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.lightPastelBlue};
  box-shadow: 0 2px 5px ${({ theme }) => theme.colors.transparentDark};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border: none;
    width: 100%;
    max-width: 100%;
    border-radius: 0px;
    margin-top: 0px;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    width: 28%;
    max-width: 28%;
  }
`;

export const ListingContainer = styled.section`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  padding: 44px 0 0 23px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    width: 100%;
    padding: 25px 0 0;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    width: 72%;
    max-width: 72%;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;

  & > *:last-child {
    width: fit-content;
    min-width: max-content;
  }

  & > *:nth-child(2),
  & > *:last-child {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.bluishGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 10px;
  }
`;

export const FilteredTitle = styled.text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  min-width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    font-size: 18px;
  }
`;
