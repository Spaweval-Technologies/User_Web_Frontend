"use client";
import styled from "styled-components";

export const Hr = styled.hr<{ height?: string; color?: string }>`
  border: none;
  border-left: 1px solid
    ${(props) => props.color ?? props.theme.colors.greyLight};
  height: ${(props) => props.height ?? "100%"};
  width: 1px;
`;
