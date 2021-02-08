import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
    from{
        opacity: 0;
        transform: translateY(-50px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const Container = styled.div`
    background: #F0EDF5;
    height: 100vh;
    overflow: auto;
    margin-top: 32px;
    padding-top: 27px;
    border-radius: 24px 24px 0px 0px;
    animation: ${appearFromTop} 2s;
`;