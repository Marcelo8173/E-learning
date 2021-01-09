import React from 'react';
import ImageInitial from '../assets/Vector.svg';
import {Container,ContentContainer} from './styles';

const Home:React.FC = () => {
    return(
        <Container>
            <div>
                <img src={ImageInitial} alt=""/>
            </div>
            <ContentContainer>
                <div>
                    <h1>Aprenda da melhor forma</h1>
                    <p>Entre na plataforma e acesse cursos de diversas áreas de conhecimento.</p>
                </div>
                <button>Começar os estudos</button>
            </ContentContainer>
        </Container>
    )
}

export default Home;