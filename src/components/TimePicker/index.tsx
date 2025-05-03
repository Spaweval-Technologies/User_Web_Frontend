"use client";
import { useState } from "react";
import Icons from "@/Icons";

import StyledSelect from "../Common/Select";
import StyledModal from "../Common/Modal";

//css
import { Button, Container, Tags, TimePickerContainer, TimeSelectWrapper } from "./index.styles";
import { PickDateBtn } from "../DatePicker/index.styles";

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
        iconWidth={24}
      >
        Any Time
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
              defaultText="From"
              value={startTime ?? ""}
              onChange={(time) => handleStartTimeSelect(time)}
              options={[
                { label: "12 am", value: "12AM" },
                { label: "1 am", value: "1AM" },
                { label: "2 am", value: "2AM" },
                { label: "3 am", value: "3AM" },
                { label: "4 am", value: "4AM" },
                { label: "5 am", value: "5AM" },
                { label: "6 am", value: "6AM" },
                { label: "7 am", value: "7AM" },
                { label: "8 am", value: "8AM" },
                { label: "9 am", value: "9AM" },
                { label: "10 am", value: "10AM" },
                { label: "11 am", value: "11AM" },
                { label: "12 pm", value: "12PM" },
                { label: "1 pm", value: "1PM" },
                { label: "2 pm", value: "2PM" },
                { label: "3 pm", value: "3PM" },
                { label: "4 pm", value: "4PM" },
                { label: "5 pm", value: "5PM" },
                { label: "6 pm", value: "6PM" },
                { label: "7 pm", value: "7PM" },
                { label: "8 pm", value: "8PM" },
                { label: "9 pm", value: "9PM" },
                { label: "10 pm", value: "10PM" },
                { label: "11 pm", value: "11PM" }
              ]}
            />
            <StyledSelect
            defaultText="To"
              value={endTime ?? ""}
              onChange={(time) => handleEndTimeSelect(time)}
              options={[
                { label: "12 am", value: "12AM" },
                { label: "1 am", value: "1AM" },
                { label: "2 am", value: "2AM" },
                { label: "3 am", value: "3AM" },
                { label: "4 am", value: "4AM" },
                { label: "5 am", value: "5AM" },
                { label: "6 am", value: "6AM" },
                { label: "7 am", value: "7AM" },
                { label: "8 am", value: "8AM" },
                { label: "9 am", value: "9AM" },
                { label: "10 am", value: "10AM" },
                { label: "11 am", value: "11AM" },
                { label: "12 pm", value: "12PM" },
                { label: "1 pm", value: "1PM" },
                { label: "2 pm", value: "2PM" },
                { label: "3 pm", value: "3PM" },
                { label: "4 pm", value: "4PM" },
                { label: "5 pm", value: "5PM" },
                { label: "6 pm", value: "6PM" },
                { label: "7 pm", value: "7PM" },
                { label: "8 pm", value: "8PM" },
                { label: "9 pm", value: "9PM" },
                { label: "10 pm", value: "10PM" },
                { label: "11 pm", value: "11PM" }
              ]}
            />
          </TimeSelectWrapper>
          </Container>
        </StyledModal>
      )}
    </TimePickerContainer>
  );
};

export default TimePicker;
