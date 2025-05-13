"use client";
import { MobileHeaderWrapper } from "@/components/MobileHeader/index.styles";
import styled from "styled-components";

export const HeaderWrapperMb = styled(MobileHeaderWrapper)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightPastelBlue};
  padding: 25px 20px 21px;
`;

export const Border = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightPastelBlue};
  width: 100%;
`;
