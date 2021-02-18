import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    .Nav{
        display: flex;
        justify-items: center;
    }
    .grid{
        width: 100%;
        display: flex;
        flex-direction: column;
        button{
            border: 1px solid transparent;
            /* text-decoration: none;     */
            &:hover{
                opacity: 0.9;
            }
        }
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
    margin: 0px 24px 24px 24px;

    h2{
        color: #3D3D4C;
        font-size: 25px;
    }
    span{
        color: #A0A0B2;
        font-size: 17px;
    }
`;

const rotation = keyframes`
    from {
		-webkit-transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(359deg);
	}
`;

export const LoadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    animation: ${rotation} 4s infinite;
`;