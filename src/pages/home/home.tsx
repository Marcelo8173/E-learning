import React, { useCallback } from 'react';
import ImageInitial from '../../assets/Vector.svg';
import {FiArrowRight} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {Container,Content,ContentContainer} from './styles';

const Home:React.FC = () => {
    const history = useHistory();

    const handleToDashboard = useCallback(() => {
        history.push('/dashboard');
    },[history]);
    
    return(
        <>
            <Container>
                <Content>
                    <div>
                        <img src={ImageInitial} alt=""/>
                    </div>
                    <ContentContainer>
                        <div>
                            <h1>Aprenda da melhor forma</h1>
                            <p>Entre na plataforma e acesse cursos de diversas áreas de conhecimento.</p>
                        </div>
                        <button onClick={handleToDashboard}>
                            Começar os estudos
                            <FiArrowRight color="#FFFFFF" size={20}/>
                        </button>
                    </ContentContainer>
                </Content>
            </Container>
        </>
    )
}

export default Home;