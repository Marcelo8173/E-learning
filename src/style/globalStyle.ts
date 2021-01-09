import {createGlobalStyle} from 'styled-components';
import elearning from '../assets/e.learning.png';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        -webkit-font-smoothing: antialiased;
        background: #6548A3;
    }
    body, input, button{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
        font-family: 'Roboto Slab';
    }
    button{
        cursor: pointer;
    }
`;