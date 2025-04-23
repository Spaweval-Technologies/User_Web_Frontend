'use client';
import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100vw;
 max-width: 1440px;
 height: 100vh;
 margin: 0 auto;
 overflow: hidden;
 background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
     max-width: 100%;
     justify-content: flex-start;
    }
`
