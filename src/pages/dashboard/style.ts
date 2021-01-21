import styled from 'styled-components';

export const Container = styled.div`
    .Nav{
        display: flex;
        justify-items: center;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    background: #FFFFFF;
    border-radius: 100px;
    width: 334px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        input{
            /* border: 1px solid transparent; */
            /* max-width: 100%; */
        }
    }
`;