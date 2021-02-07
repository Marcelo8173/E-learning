import styled from 'styled-components';

export const Container = styled.section`
    background: #FFFFFF;
    border-radius: 16px;
    justify-content:space-between;
    margin: 16px;
    padding: 30px;
    /* width: 100%; */
    flex: 1;
    div{
        display: flex;
        img{
            margin-bottom: 24px;
            max-width: 200px;
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
    }
`;