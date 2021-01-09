import styled from 'styled-components';
// import elearning from '../assets/e.learning.png';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    margin: 110px 110px 0 110px;
        div{
            flex: 1;
        }
    @media (max-width: 750px){
        flex-direction: column;
    }
`;

export const ContentContainer = styled.div`
    div{
        h1{
            font-family: 'Rubik', sans-serif;
            font-weight: 400;
            font-size: 36px;
            line-height: 42,66px;
            color: #FF6680;
            margin-bottom: 16px;
        }
        p{
            font-family: 'Roboto';
            font-weight: 400;
            color: #EDEBF5;
            font-size: 15px;
            line-height: 25px;
            margin-bottom: 40px;
        }
    }
    button{
        border:1px solid transparent;
        width: 303px;
        height: 56px;
        left: 36px;
        top: 716px;
        background: #FF6680;
        border-radius: 100px;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 15px;
        line-height: 17,58px;
        color: #FFFFFF;
    }
`;