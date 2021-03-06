import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    background: #FFFFFF;
    border-radius: 16px;
    margin: 22px 100px;
    padding: 25px;
    align-items: center;
    flex: 1;
    overflow: auto;
    img{
        margin-bottom: 24px;
        max-width: 200px;
        height: auto;
        margin-right: 30px;
        border-radius: 25px;
    }
    
    div{
        display: flex;
        flex-direction: column;
        /* justify-content: flex-start; */
        align-items: start;
        p{
            font-family: 'Roboto';
            color: #6C6C80;
            font-size: 25px;
            margin-bottom: 4px;
        }
        span{
            font-family: 'Roboto';
            color: #C4C4D1;
            font-size: 18px;
        }
    }
`;