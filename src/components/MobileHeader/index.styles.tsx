"use client";
import styled from "styled-components";
import Button from "../Common/Buttons/Button";

export const MobileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  padding: 25px 20px;
  background-image: url("/Images/HeaderBgMb.svg");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  overflow: hidden;


  @media (min-width: ${({ theme }) =>
    theme.breakpoints.md}) {
    display: none;
  }
`;

export const MbHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`;

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  max-width: 100%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 1px 4px 20px 0px rgba(0, 0, 0, 0.1);
  padding: 24px 20px;
  box-sizing: border-box;

  `;

  export const SearchBtn = styled(Button)`
   width: 100%;
   border-radius: 5px;
    margin-top: 22px;
  `;

  export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap:12px;
  margin-top: 22px;
  `;