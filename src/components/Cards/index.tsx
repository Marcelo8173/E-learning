import React from 'react';
import {Container} from './styles';
import { ICousrses } from '../../pages/dashboard';

interface ICards{
    name: string,
    image: string
}

const Cards: React.FC<ICards> = ({name,image}) => {
    return(
        <Container>  
            <div>
                <img src={image} alt=""/>
                    <p>{name}</p>
                <span>16 aulas</span>
            </div>
        </Container>
    );
}

export default Cards;