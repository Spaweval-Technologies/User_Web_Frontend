"use client";
import { useState } from "react";

import Icons from "@/Icons";
import StyledModal from "../Common/Modal";

//css
import "react-day-picker/style.css";
import {
  CalendarWrapper,
  DatePickerWrapper,
  DaySelector,
  PickDateBtn,
} from "./index.styles";

/*
 * DatePicker component
 * @returns {JSX.Element} - A date picker component that allows users to select a date.
 */
const DatePicker = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Date>(new Date());

  const handleModal = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (date: Date) => {
    setSelected(date);
    setOpen(false);
  };

  return (
    <DatePickerWrapper>
      <PickDateBtn
        onClick={handleModal}
        iconSrc={Icons.Calendar}
        iconAlt="calendar"
        iconWidth={20}
        iconHeight={20}
      >
        Any Date
      </PickDateBtn>
      <StyledModal isOpen={open} onClose={handleClose}>
        <CalendarWrapper>
          <DaySelector
            animate
            mode="single"
            required={true}
            selected={new Date(selected)}
            onSelect={handleSelect}
            today={new Date()}
          />
        </CalendarWrapper>
      </StyledModal>
    </DatePickerWrapper>
  );
};

export default DatePicker;
