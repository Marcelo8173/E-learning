import styled from 'styled-components';

interface IProps{
    selected: boolean;
}

export const Container = styled.div`
    margin-left: 24px;
    display: flex;
    button{
        justify-content: center;
        justify-items: center;
    }
`;

export const Button = styled.button<IProps>`
    
    font-family: 'Roboto',sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.selected ? "#FF6680": "#C4C4D1"};
    padding: 20px;
    border-radius: 16px;
    border: ${props => props.selected ? "3px solid red": '1px solid transparent'};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;;
    border-bottom: 1px solid transparent;;
    margin-right: 16px;
    svg{
        margin-right: 5px;
    }
    
`;