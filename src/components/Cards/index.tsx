import React from 'react';
import {Container} from './styles';

interface ICards{
    name: string;
    image: string;
    lessonQtd: string;
}

const Cards: React.FC<ICards> = ({name,image,lessonQtd}) => {
    return(
        <Container>  
            <img src={image} alt=""/>
            <div>
                <p>{name}</p>
                <span>{lessonQtd} aulas</span>
            </div>
        </Container>
    );
}

export default Cards;