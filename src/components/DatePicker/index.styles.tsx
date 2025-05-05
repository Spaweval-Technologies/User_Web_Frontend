"use client";
import styled from "styled-components";
import Icon from "../Common/Icon";
import IconButton from "../Common/Buttons/IconButton";
import { DayPicker } from "react-day-picker";

export const DatePickerWrapper = styled.div`
  position: relative;
  flex-1;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

export const PickDateBtn = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 21px 13px;
  box-sizing: border-box;
  min-height: 100%;
  flex-1;
  width: 100%;
  height: max-content;
  justify-content: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 7px 12px;
    border: 1px solid ${({ theme }) => theme.colors.greyBorder};
    border-radius: 5px;
    width: 100%;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.vsm}){
    padding: 7px 10px;
    max-width: 100%;
    font-size: 14px;
  }
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DaySelector = styled(DayPicker)`
  .rdp {
    border-radius: 12px;
  }

  .rdp-nav {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rdp-day_button {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 1;
  }

  .rdp-day_selected {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textSecondary};
    border-radius: 12px;
    border: none;
  }

  .rdp-selected .rdp-day_button {
    border: none;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.blueGrey};
  }

  .rdp-today .rdp-day_button {
    color: ${({ theme }) => theme.colors.textSecondary};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 12px;
  }

  .rdp-day_button:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textSecondary};
    border-radius: 5px;
  }

  .rdp-chevron {
    fill: ${({ theme }) => theme.colors.secondary};
  }

  .rdp-button_previous,
  .rdp-button_next {
    border: 1px solid ${({ theme }) => theme.colors.blueGrey};
    border-radius: 12px;
  }

  .rdp-month_caption {
    justify-self: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 16px;
  }

  .rdp-weekday {
    color: ${({ theme }) => theme.colors.bluishGrey};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: 13px;
    line-height: 1;
  }
`;
