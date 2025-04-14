import styled from 'styled-components';
import Icon from '../Icon';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  z-index: 1;
  padding: 12px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 60px;
    left: 0;
    width: 100%;
    max-width: 100%;
    padding: 8px;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
`;

export const CloseButton = styled(Icon)`
  align-self:end;
  display: flex;
`;