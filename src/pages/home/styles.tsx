import styled from 'styled-components';
import {shade} from 'polished';
import elearning from '../../assets/e.learning.png';

export const Container = styled.div`
    /* background-image: url(${elearning});
    background-repeat: no-repeat;
    background-size: 35%;
    border: 1px solid transparent; */
`;

export const Content = styled.div`
    display: flex;
    margin: 110px 110px 0 110px;
        div{
            flex: 1;
            img{
                width: 50%;
                @media (max-width: 750px){
                    width: 100%;
                }
            }
        }
    @media (max-width: 750px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 80px 50px 30px 50px;
    }
`;

export const ContentContainer = styled.div`
    div{
        h1{
            font-family: 'Rubik', sans-serif;
            font-weight: 400;
            font-size: 46px;
            line-height: 42,66px;
            color: #FF6680;
            margin-bottom: 16px;
        }
        p{
            font-family: 'Roboto';
            font-weight: 400;
            color: #EDEBF5;
            font-size: 15px;
            line-height: 35px;
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
        line-height: 27,58px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: all 1s;
        svg{
            margin-left: 15px;
        }
        &:hover{
            background: ${shade(0.2,'#FF6680')};
        }
    }
`;


