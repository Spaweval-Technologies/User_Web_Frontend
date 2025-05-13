"use client";
import styled from "styled-components";
import IconButton from "../Common/Buttons/IconButton";
import { OutlinedButton } from "../Common/Buttons/OutlinedButton/index.styles";
import { Button } from "../TimePicker/index.styles";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Title = styled.text`
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 12px 6px 9px;
`;

export const Hr = styled.hr`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.lightPastelBlue};
`;

export const SubTitle = styled.text`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const FilterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const List = styled.ul`
  padding: 0;
  margin: 12px 0 0;
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.bluishGrey};
  line-height: 26px;
  min-width: max-content;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  align-items: center;
  justify-content: center;

  .sort_slide {
    bottom: 0 !important;
    left: 0 !important;
    height: fit-content !important;
    width: 100% !important;
    top: auto !important;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const Btn = styled(IconButton)`
  width: 48%;
  font-size: 14px;
  height: fit-content;
  gap: 10px;
`;

export const Vr = styled.div`
  height: 18px;
  border-left: 1px solid ${({ theme }) => theme.colors.lightSilver};
`;

export const SortSlider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 20px 20px;
`;

export const SortTitle = styled.text`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  font-size: 18px;
`;

export const Filters = styled(SortSlider)`
  padding: 0 20px;
`;

export const FiltersTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ClearAll = styled.button`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.bluishGrey};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  border: none;
  outline: none;
`;

export const Buttons = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  width: 100%;
`;

export const Results = styled(OutlinedButton)`
  border: 1px solid ${({ theme }) => theme.colors.lightPastelBlue};
  width: 40%;
  border-radius: 0;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.bluishGrey};
  font-size: 12px;
  padding: 10px 0 12px;
`;

export const Apply = styled(Button)`
  border-radius: 0;
  width: 40%;
  height: fit-content;
  padding: 10px 0 12px;
  font-size: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;

export const FiltersTypes = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 143px);
`;

export const FiltersList = styled.ul`
  padding: 0;
  margin: 0;
  width: 30%;
  min-height: inherit;
  background: ${({ theme }) => theme.colors.lightPastelBlue};
  border: 1.5px solid ${({ theme }) => theme.colors.lightPastelBlue};
  list-style: none;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const FiltersListItem = styled.li<{ activeFilter?: boolean }>`
  padding: 12px 19px 7px 14px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme, activeFilter }) =>
    activeFilter ? theme.colors.background : theme.colors.transparent};

  &:hover,
  &:focus,
  &:active {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const FiltersContent = styled.div`
  width: 70%;
  height: max-content;
`;

export const SelectFilterList = styled.ul`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SelectCategoriesListItem = styled.li`
  width: fit-content;
`;
