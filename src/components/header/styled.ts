import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px 24px;
    header{
        display: flex;
        justify-content: space-between;
       div{
           button{
               border: 1px solid transparent;
               background: transparent;
               transition: all 0.2s;
               &:hover{
                   opacity: 0.7;
               }
           }
       }
    }
`;