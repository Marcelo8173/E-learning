import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: 'Rubik';
        font-weight: 400;
        font-size: 22px;
        line-height: 20px;
        color: #6C6C80;
    }
`;

export const ContentButton = styled.button`
    margin: 0 24px 16px 61px;
    display: flex;
    text-decoration: none;
    border: 1px solid transparent;
    background: #FFFFFF;
    border-radius: 16px;
    align-items: center;
    padding: 17px;
    /* justify-content: center; */
    width: 80%;
`;

export const SectionImg = styled.div`
    /* position: absolute; */
    position: relative;
    left: -40px;
    width: 75px;
    overflow: hidden;
    img{
        border-radius: 16px;
        width: 75px;
        height: auto;
    }
`;

export const Content = styled.div`
    display: flex;
    margin-top: 16px;
    color: #A3A3AD;
    font-weight: 500;
    font-family: 'Roboto';
    font-size: 16px;
    p{
        margin-right: 22px;
    }
    span{
        display: flex;
        align-items:center;
        justify-content:center;
    }
`;