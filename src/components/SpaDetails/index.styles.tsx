import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 37px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  gap: 4px;
  justify-content: space-between;
  width: 100%;
`;

export const OpenClose = styled.span`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.success};
`;

export const Time = styled.span`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.bluishGrey};
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
