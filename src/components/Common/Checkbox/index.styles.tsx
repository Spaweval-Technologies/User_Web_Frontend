"use client";
import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledBox = styled.div<{ checked: boolean }>`
  display: inline-flex;
  width: 18px;
  height: 18px;
  background: ${(props) =>
    props.checked ? props.theme.colors.primary : props.theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.blueGrey};
  border-radius: 4px;
  transition: all 150ms;
  align-items: center;
  justify-content: center;

  svg {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const LabelText = styled.label`
  margin-left: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;
