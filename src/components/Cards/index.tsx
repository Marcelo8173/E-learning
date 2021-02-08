import React from 'react';
import {Container} from './styles';

interface ICards{
    name: string,
    image: string
}

const Cards: React.FC<ICards> = ({name,image}) => {
    return(
        <Container>  
            <img src={image} alt=""/>
            <div>
                <p>{name}</p>
                <span>16 aulas</span>
            </div>
        </Container>
    );
}

export default Cards;