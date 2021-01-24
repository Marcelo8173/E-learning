import React from 'react';
import {FiTrash} from 'react-icons/fi';
import Math from '../../assets/Math.png'
import {Container} from './styles';

const Cards: React.FC = () => {
    return(
        <Container>
            <div>
                <img src={Math} alt=""/>
                <p>Matemática</p>
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