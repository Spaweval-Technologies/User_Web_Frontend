"use client";
import styled from "styled-components";
import Icon from "../Common/Icon";
import IconButton from "../Common/Buttons/IconButton";

export const DatePickerWrapper = styled.div`
  position: relative;
`;

export const Modal = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  background-color: white;
  border-radius: 8px;
  z-index: 1;
  padding: 12px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
`;

export const CloseBtn = styled(Icon)`
  align-self: end;
`;

export const PickDateBtn = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
