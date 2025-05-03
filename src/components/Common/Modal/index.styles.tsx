import styled from "styled-components";
import Icon from "../Icon";

export const ModalWrapper = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  z-index: 1;
  padding: 12px 16px;
  border: 1px solid ${({theme}) => theme.colors.gray80};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px ${({theme}) => theme.colors.transparentGrey};
  width: max-content;
  gap: 8px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: calc(100% + 20px);
    left: 0;
    width: max-content;
    max-width: max-content;
    padding: 12px;
    box-shadow: none;
  }
`;

export const CloseButton = styled(Icon)`
  align-self: end;
  display: flex;
`;
