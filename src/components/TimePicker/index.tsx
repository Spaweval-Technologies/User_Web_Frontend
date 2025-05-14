"use client";
import { useState } from "react";
import Icons from "@/Icons";

import StyledSelect from "../Common/Select";
import StyledModal from "../Common/Modal";
import timeOptions from "./data";
import { PickDateBtn } from "../DatePicker/index.styles";

//css
import {
  Button,
  Container,
  Tags,
  TimePickerContainer,
  TimeSelectWrapper,
} from "./index.styles";

/**
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
  };

  const handleEndTimeSelect = (time: string) => {
    time && setEndTime(time);
  };

  return (
    <TimePickerContainer>
      <PickDateBtn
        onClick={handleModal}
        iconSrc={Icons.Clock}
        iconAlt="clock"
        iconHeight={24}
        iconWidth={24}>
        {startTime ?? "Any Time"}
      </PickDateBtn>
      {open && (
        <StyledModal isOpen={open} onClose={handleClose}>
          <Container onClick={(e) => e.stopPropagation()}>
            <Tags>
              <Button>Any Time</Button>
              <Button>Morning</Button>
              <Button>Afternoon</Button>
              <Button>Evening</Button>
            </Tags>
            <TimeSelectWrapper>
              <StyledSelect
                position="right"
                defaultText="From"
                value={startTime ?? ""}
                onChange={(time) => handleStartTimeSelect(time)}
                options={timeOptions}
              />
              <StyledSelect
                defaultText="To"
                value={endTime ?? ""}
                onChange={(time) => handleEndTimeSelect(time)}
                options={timeOptions}
              />
            </TimeSelectWrapper>
          </Container>
        </StyledModal>
      )}
    </TimePickerContainer>
  );
};

export default TimePicker;
