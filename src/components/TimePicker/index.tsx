"use client";
import { useState } from "react";
import Icons from "@/Icons";

import StyledSelect from "../Common/Select";

//css
import { TimePickerContainer, TimeSelectWrapper } from "./index.styles";
import { PickDateBtn } from "../DatePicker/index.styles";
import StyledModal from "../Common/Modal";

/*
  * TimePicker component
  * @returns {JSX.Element} - A time picker component that allows users to select a start and end time.
*/
const TimePicker = () => {
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStartTimeSelect = (time: string) => {
    time && setStartTime(time);
    setOpen(false);
  };

  const handleEndTimeSelect = (time: string) => {
    time && setEndTime(time);
    setOpen(false);
  };

  return (
    <TimePickerContainer>
      <PickDateBtn
        onClick={handleModal}
        iconSrc={Icons.Clock}
        iconAlt="clock"
        iconHeight={24}
        iconWidth={24}
      >
        Any Time
      </PickDateBtn>
      {open && (
        <StyledModal isOpen={open} onClose={handleClose}> 
          <TimeSelectWrapper>
          <StyledSelect
            value={startTime ?? ""}
            onChange={(time) => handleStartTimeSelect(time)}
            options={[{ label: "6 am", value: "6AM" }]}
          />
          <StyledSelect
            value={endTime ?? ""}
            onChange={(time) => handleEndTimeSelect(time)}
            options={[{ label: "10pm", value: "10PM" }]}
          />
          </TimeSelectWrapper>
        </StyledModal>
      )}
    </TimePickerContainer>
  );
};

export default TimePicker;
