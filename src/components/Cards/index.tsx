import React from 'react';
import {FiTrash} from 'react-icons/fi';
import {Container} from './styles';
import { ICousrses } from '../../pages/dashboard';

const Cards: React.FC<ICousrses> = ({name,image}) => {
    return(
        <Container>
            <div>
                <img src={image} alt=""/>
                    <p>{name}</p>
                <span>16 aulas</span>
            </div>
            <div>
                <button>
                    <FiTrash size={24}  color="#C4C4D1"/>
                </button>
            </div>
        </Container>
    );
}

export default Cards;