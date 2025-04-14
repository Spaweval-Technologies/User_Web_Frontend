"use client";
import styled from "styled-components";
import Icon from "../Common/Icon";
import IconButton from "../Common/Buttons/IconButton";
import { DayPicker } from "react-day-picker";

export const DatePickerWrapper = styled.div`
  position: relative;
`;

export const StyledModalContainer = styled.aside`
  position: absolute;
  top: 80px;
  left: 0;
  background-color: red;
  border-radius: 8px;
  z-index: 1;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  display: flex;
  flex-direction: column;
`;

export const CloseBtn = styled(Icon)`
  align-self: end;
`;

export const PickDateBtn = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 13px;
  box-sizing: border-box;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0px 13px;
    border: 1px solid ${({ theme }) => theme.colors.greyBorder};
    border-radius: 5px;
    width: 50%;
  }
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
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
