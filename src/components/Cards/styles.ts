import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    background: #FFFFFF;
    border-radius: 16px;
    justify-content:space-between;
    margin: 16px;
    padding: 30px;
    max-width: 220px;
    div{
        img{
            margin-bottom: 24px;
            width: 80%;
            height: auto
        }
        p{
            font-family: 'Roboto';
            color: #6C6C80;
            margin-bottom: 4px;
        }
        span{
            font-family: 'Roboto';
            color: #C4C4D1;
        }
        button{
            background: transparent;
            border: 1px solid transparent;
        }
    }
`;