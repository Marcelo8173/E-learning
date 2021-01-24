import styled from 'styled-components';

export const Container = styled.div`
    .Nav{
        display: flex;
        justify-items: center;
    }
    .grid{
        display: grid;
        grid-template-columns: auto auto auto auto auto;
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
            color:#C4C4D1;
            &::placeholder{
                color:#C4C4D1;
            }
        }
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    margin: 0px 24px;

    h2{
        color: #3D3D4C;
        font-size: 25px;
    }
    span{
        color: #A0A0B2;
        font-size: 17px;
    }
`;