'use client';
import { useState } from "react";
import { DayPicker } from "react-day-picker";

import Icons from "@/Icons";

//css
import "react-day-picker/style.css";
import { CloseBtn, DatePickerWrapper, Modal, PickDateBtn } from "./index.styles";

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
      <PickDateBtn onClick={handleModal} iconSrc={Icons.Calendar} iconAlt="calendar" iconWidth={20} iconHeight={20}>
        Any Date</PickDateBtn>
      {open && (
        <Modal>
          <CloseBtn src={Icons.Close} onClick={handleClose} width={14} height={14} alt="close" />
          <DayPicker
          animate
          mode="single"
          required={true}
          selected={selected}
          onSelect={handleSelect}
          footer={
            selected
              ? `Selected: ${selected.toLocaleDateString()}`
              : "Pick a day."
          }
        />
        </Modal>
      )}
    </DatePickerWrapper>
  );
}

export default DatePicker;