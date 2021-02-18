import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentButton = styled.button`
    margin: 0 24px 16px 61px;
    display: flex;
    text-decoration: none;
    border: 1px solid transparent;
    background: #FFFFFF;
    border-radius: 16px;
    align-items: center;
    padding: 12px;
    /* justify-content: center; */
    width: 80%;
`;

export const SectionImg = styled.div`
    /* position: absolute; */
    width: 68px;
    overflow: hidden;
    border-radius: 16px;
    img{
        width: 68px;
        height: auto;
    }
`;