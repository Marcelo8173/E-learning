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
        width: 100%;
        height: 100%;
        input{
            width: 75%;
            height: 90%;
            margin-left: 10px;
            border: 1px solid transparent;
            &::placeholder{
                color:#C4C4D1;
            }
        }
    }
`;